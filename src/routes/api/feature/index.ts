
import { Request, Response, Router } from 'express';

import { BaconServiceFactory } from '../../../services/ServiceFactory';
// TODO: import { logger } from '../../../utils/logger';
import { BaconFeature } from '../../../types';
import { handleCaughtError } from '../../../utils/helpers';
export const featureRouter = Router({ mergeParams: true });





async function handleGetFeatureActors(req: Request, res: Response) {
    try {
        if (!req.params.feature_id) throw new Error('no feature id');
        const featureService = BaconServiceFactory.createFeatureService();
        const featureCast = await featureService.getFeatureCastByMovieId(+req.params.feature_id);
        if (!featureCast) {
            return res.status(404).json({ message: 'cannot find cast for the requested feature ID.' });
        }
        return res.status(200).json({ id: req.params.feature_id, cast: featureCast });
    } catch (error) {
        handleCaughtError(res, error as Error, 'handleGetActorFeatures');
    }
}

async function handleGetMovieId(req: Request, res: Response) {
    try {
        const { title } = req.query;
        if (!title) throw new Error('no title provided');
        const featureService = BaconServiceFactory.createFeatureService();
        const featureResult: BaconFeature = await featureService.getFeatureByTitle(title as string);
        if (!featureResult) {
            return res.status(404).json({ message: 'feature cannot be found with provided title' });
        }
        return res.status(200).json({ id: featureResult.id, title: featureResult.title });
    } catch (error) {
        handleCaughtError(res, error as Error, 'handleGetMovieId');
    }
}


featureRouter.get('/:feature_id/cast', (req, res, next) => {
    /* #swagger.responses[200] = {
            description: "feature list return type that a requested actor has been in",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/BaconFeatureList"
                    }
                }           
            }
        }   
    */
    handleGetFeatureActors(req, res).catch(next);
});


featureRouter.post('/get_id', (req, res, next) => {
    /*  #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/GetMovieRequest"
                }  
            }
        }
    } 
*/
    /* #swagger.responses[200] = {
            description: "just a movie thats been looked up by title",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/BaconMovie"
                    }
                }           
            }
        }   
    */
    handleGetMovieId(req, res).catch(next);
});