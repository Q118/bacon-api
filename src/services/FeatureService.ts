import { MovieActorStore } from "../data/api/MovieActorStore";

// type FeatureServiceParams = {
//     feature_id: string;
//     movie_id: string;
// }



/**
 * @class featureService
 * this class contains the logic for working with the feature data
 * regardless of the source of that data 
 */

export class FeatureService {
    dataStore: MovieActorStore;



    constructor() {
        this.dataStore = new MovieActorStore();
    }

    getFeatures(movie_id: string) {
        // return this.answer_id;
    }

    getFeatureById(feature_id: string) {
        // return this.answer_id;
    }

    getFeatureByTitle = async (title: string) => this.dataStore.getMovieByTitle(title);


    // TODO: handle it not being the first one. in service layer
    


}    