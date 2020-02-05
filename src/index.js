const activities = require('../models/model.json');
const programs = require('../models/programs.json');

const ActivityManager = {
  	_programs: programs,
  	_activities: activities,
  	get(activity = '', noOfSuggestions = 1) {
  		if (!this._programs.includes(activity)) {
  			return null;
  		}

  		const programMappings = this._activities.maps[activity];
  		const programId = this.shuffle(programMappings, noOfSuggestions);
  		const selectedActivity = this._activities.definitions[programId];
  		return selectedActivity;
  	},
  	getById(id = '') {
  		if (!this._activities.definitions[id]) {
  			return null;
  		}

  		return this._activities.definitions[id];
  	},
  	programs() {
  		return this._programs;
  	},
  	definitions(activity = '') {
  		if (!this._programs.includes(activity)) {
  			return [];
  		}

  		const programMappings = this._activities.maps[activity];
  		return programMappings.map(
  			id => ({
  				id,
  				...this._activities.definitions[id],
  			})
  		);
  	},
	shuffle(items = [], count = 1) {
		// https://stackoverflow.com/a/19270021/6821268
	    const selected = new Array(count);
		let noOfItems = items.length;
	    const collection = new Array(noOfItems);

	    if (count > noOfItems)
	        throw new RangeError("shuffle: more elements taken than available");
	    while (count--) {
	        const item = Math.floor(Math.random() * noOfItems);
	        selected[count] = items[item in collection ? collection[item] : item];
	        collection[item] = --noOfItems in collection ? collection[noOfItems] : noOfItems;
	    }

	    return selected;
	}
};

exports.QuitxPrograms = ActivityManager;
