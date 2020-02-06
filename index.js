const uuid = require('uuid/v4');
const fs = require('fs');

const activities = require('./models/activities.json')


const videos = activities.map(a => ({
	"id": uuid(),
	"title": a,
	"description": "",
	"category": "",
    "source": null,
    "url": null,
    "thumbnail": null,
    "rating": 0,
    "lengthInMins": null,
    "meta": {},
    "tags": []
}));

fs.writeFileSync('./datasource/activities.json', JSON.stringify(videos, null, 2));