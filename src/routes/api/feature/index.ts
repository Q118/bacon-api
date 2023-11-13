
import { Router, Request, Response, NextFunction } from 'express';
import { handleCaughtError } from '../../../utils/helpers';
import { FeatureService } from '../../../services/FeatureService';

// import { logger } from '../../../utils/logger';
import { BaconActorList, BaconFeature } from '../../../types';
export const featureRouter = Router({ mergeParams: true });






async function handleGetFeatureActors(req: Request, res: Response, next: NextFunction) {
    try {


        return res.status(200).json({ id: 'very fake movie id', cast: [ { id: 'nothing', name: 'not a thing', characterName: 'george' } ] });

    } catch (error) {
        handleCaughtError(res, error, 'handleGetActorFeatures');
    }
}

async function handleGetMovieId(req: Request, res: Response, next: NextFunction) {
    try {
        const { title } = req.query;
        if (!title) throw new Error('no title provided');
        const featureService = new FeatureService();
        const featureResult: BaconFeature = await featureService.getFeatureByTitle("" + title);
        // return res.status(200).json({ id: 'very fake movie id', title: 'yes' });
        if (!featureResult) {
            return res.status(404).json({ message: 'no feature found' });
        } 
        return res.status(200).json({ id: featureResult.id, title: featureResult.title });
    } catch (error) {
        handleCaughtError(res, error, 'handleGetMovieId');
    }
}


/**
 * @swagger
 * 
 * /v1/api/feature/{feature_id}/cast:
 * get:
 *   description: Get all actors for a feature
 *  parameters:
 *   - in: path
 *   name: feature_id
 *  schema:
 *  type: string
 * required: true
 * description: The id of the feature
 * responses:
 * 200:
 * description: returns an array of actors for the feature
 * schema:
 * type: object
 * properties:
 * id:
 * type: string
 * cast:
 * type: BaconActorList[]
 */
featureRouter.get('/:feature_id/cast', (req, res, next) => {
    handleGetFeatureActors(req, res, next).catch(next);
});


/**
 * @swagger
 * /v1/api/feature/get_id:
 * get:
 *  description: Get the id of a feature
 * parameters:
 * - in: query
 * name: title
 * schema:
 * type: string
 * required: true
 * description: The title of the feature
 * responses:
 * 200:
 * description: returns the id of the feature
 * schema:
 * type: BaconFeature
 * properties:
 * id:
 * type: string
 * title:
 * type: string
 */
featureRouter.get('/get_id', (req, res, next) => {
    handleGetMovieId(req, res, next).catch(next);
});