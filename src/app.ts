import express, { Express } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";

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

/** swagger */
if (process.env.environment !== 'production') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
    console.log('***********************************************');
    console.log('______________________________________________');
    console.log('***********************************************');
    console.log('_______________________________________________');
});
