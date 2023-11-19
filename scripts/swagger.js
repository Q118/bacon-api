const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });
const packageJSON = require('../package.json');




const doc = {
    info: {
        title: 'Bacon API',
        description: packageJSON.description,
        version: packageJSON.version,
    },
    // PICKUP: fill in the other envs once uu have them hosted 
    servers: [
        {
            "url": "http://localhost:4020/api",
            "description": "Local Development"
        },
    ],
    components: {
        schemas: {
            BaconFeature: {
                id: 1223,
                title: 'The Wizard of Oz',
                characterName: 'The Wicked Witch of the West',
            },
            BaconFeatureList: {
                id: 33445,
                features: [
                    { id: 6543, title: 'The Big Lebowski', characterName: 'The Dude' },
                    { id: 2222, title: 'Reservoir Dogs', characterName: 'Mr. Pink' },
                    { id: 3333, title: 'The Wizard of Oz', characterName: 'The Wicked Witch of the West' },
                    { id: 789, title: 'Another Movie Title', characterName: 'Another Character Name', },
                ]
            },
            BaconActor: {
                id: '1',
                name: 'John Doe',
                characterName: 'Character Name',
            },
            BaconMovie: {
                id: 456,
                title: 'Movie Title',
            },
            BaconActorList: {
                id: '3',
                actors: [
                    { id: 422, name: 'Another Actor', characterName: 'Another Character', },
                    { id: 123, name: 'Gwyneth Paltrow', characterName: 'Pepper Pots', },
                    { id: 456, name: 'Jane Doe', characterName: 'Charlie Brock', },
                ],
            },

        },
    },



    // FUTURE: would eventually want security around the calls if if its a paid thing and they use that key and cross check and yea from here but for now during dev just opwen
};

const outputFile = 'docs/api/openapi.json';
const routes = [ 'src/routes/api/index.ts' ];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);