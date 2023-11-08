import express, { Request, Response, NextFunction, Express } from "express";
import cors from "cors";
// const swaggerUi = require('swagger-ui-express');
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swagger_options } from "./swagger";
import { router } from "./routes";

const app: Express = express();
const PORT = 4020;

app.use(cors({
    // This will respond with the requesting origin's domain
    origin: true,
    // we could allow clients to use more custom headers here
}));



/** swagger */
const swaggerSpec = swaggerJsdoc(swagger_options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



/** routes */
app.use('/v1', router);



app.listen(PORT, () =>
    console.log(`Server is listening on port ${PORT}...`)
);
