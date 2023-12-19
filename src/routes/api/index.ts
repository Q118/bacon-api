/**
 * API Routes
 */
import { Request, Response, Router } from 'express';

import { handleCaughtError } from '../../utils/helpers';
import { logger } from '../../utils/logger';
import { actorRouter } from './actor';
import { featureRouter } from './feature';

export const apiRouter = Router({ mergeParams: true });

apiRouter.use('/actor', actorRouter);
apiRouter.use('/feature', featureRouter);



/**
 * @param req 
 * @param res 
 * @param next 
 */
async function handleAuthCheck(req: Request, res: Response) {
    try {
        logger.info("Request received to health check user.");
        // TODO: stuff in here to ensure its locked down the access to it only coming from the client i say
        res.status(200).json({ message: 'Health check passed! You are authorized.' });
    } catch (error) {
        handleCaughtError(res, error as Error, 'handleAuthCheck');
    }
}




apiRouter.get('/check', (req, res, next) => {
    // #swagger.name = "AuthCheck"
    // #swagger.description = "sanity check to ensure the api is up and running and client is authorized"
    /* #swagger.responses[200] = {
        content: {
            "application/json": {
                schema:{
                    $ref: "#/components/schemas/authCheckResponse"
                }
            }           
        }
    }   
*/
    handleAuthCheck(req, res).catch(next);
});
