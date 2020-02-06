const uuid = require('uuid');
const sampler = require('lodash.samplesize');
const path = require('path');
const programs = require('../models/programs.json');
const activities = require('../datasource/activities.json');
const music = require('../datasource/music.json');
const games = require('../datasource/games.json');
const mindfullness = require('../datasource/mindfullness.json');
const talkToBuddy = require('../datasource/talk-to-buddy.json');
const { isDefined, isEmpty, isNull, writeFs } = require('../utilities');

const ActivityManager = {
	_programs: programs,
	_activities: activities,
  _music: music,
  _games: games,
  _mindfullness: mindfullness,
  _talkToBuddy: talkToBuddy,
  __activities: [ 'music', 'activities', 'games', 'mindfullness', 'talkToBuddy' ],
  _sampler: sampler,
	get(program = '', { 
    activities: classes = 3, 
    suggestions = 3 ,
    classes: providedActivities = []
  } = {}) {
		if (!this._programs.includes(program)) {
			return null;
		}

    providedActivities = providedActivities.filter(
      activity => this.__activities.includes(activity)
    );

		const activities = providedActivities && providedActivities.length 
      ? providedActivities
      : this._sampler(this.__activities, classes);
      
    const definitions = {};
    activities.map(className => {
      const _className = `_${className}`;
      definitions[className] = this._sampler(this[_className], suggestions);
    });

    return definitions;
	},
	programs() {
		return this._programs;
	},
  activities() {
    return this.__activities;
  },
	definitions(className = '') {
		if (!this.__activities.includes(className)) {
			return [];
		}

    const _className = `_${className}`;
    return this[_className];
	},
  add(className = '', definition = {}) {
    if (!this.__activities.includes(className)) {
      throw new Error(`ActivityNotExists: ${className} don't exists as a datasource`);
    }

    if (isEmpty(definition) || isNull(definition)) {
      throw new Error(`InvalidDefinition: Invalid definition provided`);
    }

    const id = uuid();
    const _className = `_${className}`;
    const datasource = this[_className].slice();
    const dataPath = path.resolve(__dirname, `../datasource/${className}.json`);
    const data = Object.assign({}, { id }, definition);
    datasource.push(data);
    writeFs(dataPath, datasource);
    this[_className] = datasource;
    return id;
  },
  update(className = '', id = '', definition = {}) {
    if (!this.__activities.includes(className)) {
      throw new Error(`ActivityNotExists: ${className} don't exists as a datasource`);
    }

    const _className = `_${className}`;
    const datasource = this[_className].slice();
    const index = datasource.findIndex(
      source => source.id === id
    );

    if (-1 === index) {
      throw new Error(`ActivityNotExists: Such activity doesn't exist`);
    }

    datasource[index] = Object.assign({}, datasource[index], definition);
    const dataPath = path.resolve(__dirname, `../datasource/${className}.json`);
    writeFs(dataPath, datasource);
    this[_className] = datasource;
    return datasource[index];
  },
  remove(className = '', id = '') {
    if (!this.__activities.includes(className)) {
      throw new Error(`ActivityNotExists: ${className} don't exists as a datasource`);
    }

    const _className = `_${className}`;
    const datasource = this[_className].slice();
    const definition = datasource.find(
      source => source.id === id
    );

    if (!isDefined(definition) || isNull(definition)) {
      throw new Error(`ActivityNotExists: Such activity doesn't exist`);
    }

    const updatedDefinitions = datasource.filter(
      source => source.id !== id
    );

    const dataPath = path.resolve(__dirname, `../datasource/${className}.json`);
    writeFs(dataPath, updatedDefinitions);
    this[_className] = updatedDefinitions;
    return null;
  }
};

exports.QuitxPrograms = ActivityManager;
