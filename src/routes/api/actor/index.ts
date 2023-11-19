
import { Router, Request, Response, NextFunction } from 'express';
import { handleCaughtError } from '../../../utils/helpers';
// import { logger } from '../../../utils/logger';
import { BaconFeatureList } from '../../../types';
export const actorRouter = Router({ mergeParams: true });






async function handleGetActorFeatures(req: Request, res: Response, next: NextFunction) {
    try {
        // console.log('req.params', req.params)
        if (!req.params.actor_id) throw new Error('no actor id');
        return res.status(200).json({ id: req.params.actor_id, features: [ { id: 'nothing', title: 'not a thing' } ] });

    } catch (error) {
        handleCaughtError(res, error, 'handleGetActorFeatures');
    }
}





actorRouter.get('/:actor_id/features', (req, res, next) => {
    /* #swagger.responses[200] = {
        description: "Get all features for an actor",
        content: {
            "application/json": {
                schema:{
                    $ref: "#/components/schemas/BaconFeatureList"
                }
            }           
        }
    } 
*/
    handleGetActorFeatures(req, res, next).catch(next);
});