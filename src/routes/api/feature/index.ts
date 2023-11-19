
import { Router, Request, Response, NextFunction } from 'express';
import { handleCaughtError } from '../../../utils/helpers';
import { BaconServiceFactory } from '../../../services/ServiceFactory';

// TODO: import { logger } from '../../../utils/logger';
import { BaconActorList, BaconFeature } from '../../../types';
export const featureRouter = Router({ mergeParams: true });





// PICK UP HERE
async function handleGetFeatureActors(req: Request, res: Response, next: NextFunction) {
    try {
        if (!req.params.feature_id) throw new Error('no feature id');
        const featureService = BaconServiceFactory.createFeatureService();
        const featureCast = featureService.getFeatureCastByMovieId(+req.params.feature_id);
        if (!featureCast) {
            return res.status(404).json({ message: 'cannot find cast for the requested feature ID.' });
        }
        // return res.status(200).json({ id: 'very fake movie id', cast: [ { id: 'nothing', name: 'not a thing', characterName: 'george' } ] });
        return res.status(200).json({ id: req.params.feature_id, cast: featureCast });
    } catch (error) {
        handleCaughtError(res, error, 'handleGetActorFeatures');
    }
}

async function handleGetMovieId(req: Request, res: Response, next: NextFunction) {
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
        handleCaughtError(res, error, 'handleGetMovieId');
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
    handleGetFeatureActors(req, res, next).catch(next);
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
    handleGetMovieId(req, res, next).catch(next);
});