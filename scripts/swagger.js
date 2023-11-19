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
    ]

    // FUTURE: would eventually want security around the calls if if its a paid thing and they use that key and cross check and yea from here but for now during dev just opwen
};

const outputFile = 'docs/api/openapi.json';
const routes = [ 'src/routes/api/index.ts' ];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);