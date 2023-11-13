
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



/**
 * @openapi
 * /v1/api/actor/{actor_id}/features:
 * get:
 *    description: Get all features for an actor
 *   parameters:
 *     - in: path
 *      name: actor_id
 *     schema:
 *      type: string
 *     required: true
 *    description: The id of the actor
 *   responses:
 *   200:
 *     description: returns an array of features for the actor
 *    schema:
 *    type: object
 *   properties:
 *   id:
 *   type: string
 *  features:
 *  @type {BaconFeatureList}[]
 */
actorRouter.get('/:actor_id/features', (req, res, next) => {
    handleGetActorFeatures(req, res, next).catch(next);
});