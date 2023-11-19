/**
 * API Routes
 */
import { Router, Request, Response, NextFunction } from 'express';
import { actorRouter } from './actor';
import { featureRouter } from './feature';
import { handleCaughtError } from '../../utils/helpers';
import { logger } from '../../utils/logger';

export const apiRouter = Router({ mergeParams: true });

apiRouter.use('/actor', actorRouter);
apiRouter.use('/feature', featureRouter);



/**
 * @param req 
 * @param res 
 * @param next 
 */
async function handleAuthCheck(req: Request, res: Response, next: NextFunction) {
    try {
        logger.info("Request received to health check user.");
        // TODO: stuff in here to ensure its locked down the access to it only coming from the client i say
        res.status(200).json({ message: 'Health check passed! You are authorized.' });
    } catch (error) {
        handleCaughtError(res, error, 'handleAuthCheck');
    }
}



/*
 #swagger.responses[200] = {
    "application/json": {
        "description": "sanity check to ensure the api is up and running and client is authorized"
    }
 }
*/
apiRouter.get('/check', (req, res, next) => {
    handleAuthCheck(req, res, next).catch(next);
});
