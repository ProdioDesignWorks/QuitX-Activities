const { QuitxPrograms } = require('../');

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