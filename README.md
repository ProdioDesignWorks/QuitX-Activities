# QuitX-Activities
QuitX program activities &amp; their definitions. This SDK suggests program activities by evaluating past history &amp; profile of the smoker.


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Features:

  - Simple APIs
  - Get program definitions
  - Get program activities

### Installation

QuitX-Activities requires [Node.js](https://nodejs.org/) v6+ to run.

```sh
$ npm install quitx-activities --save
```

### How to use
```js
const { QuitxPrograms } = require('quitx-activities');

// Get program activities
QuitxPrograms.get('A1'); // { music:'', mindfullnessSession: '', activities: '' }
```

# All APIs
Also available in examples folder
```js
const { QuitxPrograms } = require('../');

console.log(`Get activity: A23`);
console.log(
	QuitxPrograms.get('A23')
);

console.log(`Get activity: A1`);
console.log(
	QuitxPrograms.get('A1')
);

console.log(`Custom activity: A2`);
console.log(
	// Be default activities is set to 3 & suggestions is set to 3
	QuitxPrograms.get('A2', { activities: 2, suggestions: 1 })
);

console.log(`Custom activity: A2`);
console.log(
	// Define activities to consider by program. This will ignore the random selection of activities.
	// "activities" property won't have any effect when "classes" property is passed
	// Still, you can manipulate "suggestions" count
	QuitxPrograms.get('A4', { classes: [ 'music' ] })
); 

console.log(`Get all programs`);
console.log(
	QuitxPrograms.programs()
);

console.log(`Get all activities`);
const activities = QuitxPrograms.activities();
console.log(activities);

console.log(`Get ${activities[0]} definitions`);
console.log(
	QuitxPrograms.definitions(activities[0])
);

console.log("activities[0]:", activities[0]);
console.log("Add new definition to an activity")
const id = QuitxPrograms.add(activities[0], { title: 'lorem ipsum doret' });
console.log("id:", id);

console.log("Update definition of an activity");
console.log(
	QuitxPrograms.update(activities[0], id, { title: 'lorem ipsum doret - [UPDATED]' })
);

console.log("Remove definition from an activity");
console.log(
	QuitxPrograms.remove(activities[0], id)
);
```