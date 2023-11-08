// const swaggerJsdoc = require('swagger-jsdoc');

export const swagger_options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Bacon API',
            version: '0.0.1',
        },
    },
    apis: [ './src/routes*.ts' ],
};


// const swaggerSpecification = swaggerJsdoc(options);