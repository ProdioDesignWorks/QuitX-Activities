# QuitX-Activities
QuitX program activities &amp; their definitions. This SDK suggests program activities by evaluating past history &amp; profile of the smoker.


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Features:

  - Simple APIs
  - Get program definitions
  - Get program activities

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v6+ to run.

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
const { QuitxPrograms } = require('quitx-activities');

console.log(`Get activity: A23`);
console.log(
	QuitxPrograms.get('A23')
);

console.log(`Get activity: A1`);
console.log(
	QuitxPrograms.get('A1')
);

console.log(`Get all programs`);
console.log(
	QuitxPrograms.programs().length
);

console.log(`Get activity A1 definitions`);
console.log(
	QuitxPrograms.definitions('A1').length
);

console.log(`Get activity definition by id: 64cbfbfb-1f26-4740-b241-dff3c779dfe5`);
console.log(
	QuitxPrograms.getById('64cbfbfb-1f26-4740-b241-dff3c779dfe5')
);
```