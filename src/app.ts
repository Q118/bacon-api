import express, { Express } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../docs/api/openapi.json";

import { router } from "./routes";

const app: Express = express();
const PORT = 4020;

app.use(cors({
    // This will respond with the requesting origin's domain
    origin: true,
    // we could allow clients to use more custom headers here
}));


/** routes */
app.use('/v1', router);

/** 
 * swagger
 * the doc can be updated manually with with `npm run swagger`
 * But hmr is enabled so it will update automatically when you save while the server is running
 */
if (process.env.environment !== 'production') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    console.log(`Live Swagger openapi docs at http://localhost:${PORT}/api-docs`);
}




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
    console.log('***********************************************');
    console.log('______________________________________________');
    console.log('***********************************************');
    console.log('_______________________________________________');
});
