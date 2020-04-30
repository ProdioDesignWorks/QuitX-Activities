const { QuitxPrograms } = require("../");

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

console.log(
	// Be default activities is set to 3 & suggestions is set to 3
	QuitxPrograms.get("A2", {
	  activities: 2,
	  suggestions: 1,
	  sources: {
		music: [
		  {
			id: "fa992617-21e8-48fd-9871-06e5cee20438",
			title: "Aaoge Jab Tum",
		  },
		  {
			id: "2c288101-d62d-4d8f-bf66-c0c13b414841",
			title: "Kun Faya Kun",
		  },
		  {
			id: "ad7a6799-0dee-43cf-8b34-f0dc627e5c3f",
			title: "Mera Mann Kehne Laga",
		  },
		],
		games: [
		  {
			id: "08f1f5e0-4b95-483d-95bf-5216fde2e510",
			title: "Angry Birds",
		  },
		  {
			id: "600f2dcc-293c-4c25-9a9c-aadbed42d3fa",
			title: "Solitaire",
		  },
		],
	  },
	})
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
