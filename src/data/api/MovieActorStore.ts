import fetch from 'node-fetch';
import { config } from '../../config';
import { BaconFeature, BaconActor } from '../../types';


const apiKey = config.TMDB_API_KEY.v3;
const urlPrefix = `/search/movie?query=`;
const urlSuffix = `&page=1&api_key=${apiKey}`;


/**
 * @class MovieActorDataStore
 * fetches data from the TMDB API
 */
export class MovieActorStore {
    api_key: string;
    api_base: string;
    url_prefix: string;
    url_suffix: string;

    constructor() {
        this.api_key = apiKey;
        this.api_base = config.API_BASE_URL;
        this.url_prefix = urlPrefix;
        this.url_suffix = urlSuffix;
    }


    /**
     * 
     * @param title - the title of the movie to search for
     * @returns {Promise<BaconFeature>} movie data
     */
    async getMovieByTitle(title: string): Promise<BaconFeature> {
        const url = `${this.api_base}${this.url_prefix}${title}${this.url_suffix}`;
        const response = await fetch(url);
        const data = await response.json() as { results: any[] };
        // TODO: handling it not being the top one
        if (data && data.results && data.results.length > 0) {
            // info: likely it is the top one
            const firstFeature = data.results[ 0 ];
            const movieObject = this.convertToBaconFeature(firstFeature);
            return movieObject;
        } else {
            throw new Error('no movie found');
        }
    }

    /**
     * @method getCastByMovieId
     * @param id - the TMDB defined id of the movie to get the cast for
     * @returns {BaconActor[]} list of actors
     */
    async getCastByMovieId(id: number): Promise<BaconActor[]> {
        // only try catch in the route/controller bc that is what makes sense dug
        const url = `${this.api_base}/movie/${id}/credits?api_key=${this.api_key}`;
        const response = await fetch(url);
        const data = await response.json() as { cast: any[] };
        if (data && data.cast && data.cast.length > 0) {
            const actors = data.cast.map((actor) => this.convertToBaconActor(actor));
            // console.log(actors)
            return actors;
        } else {
            throw new Error('invalid movie ID');
        }
    };



    /**
     * @method getActorsByName
     * @param name - the name of the actor to search for
     * @returns {BaconActor} the actor data
     */
    // async getActorByName(name: string) {
    // yea we shouldnt need this bc the actors id is enough to identify them.
    // };


    /**
     * @method getFeaturesByActorId
     * gets a list of every feature an actor has been in
     * @returns 
     */
    async getFeaturesByActorId(id: string) { 
        // movie or combined_credits
        const url = `${this.api_base}/person/${id}/combined_credits?api_key=${this.api_key}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    };

    static init() {
        return new MovieActorStore();
    }

    /** converts response to @type {BaconFeature} */
    private convertToBaconFeature(data: any): BaconFeature {
        const movieObject: BaconFeature = {
            id: data.id,
            title: data.original_title || data.title,
        };
        return movieObject;
    }

    /** converts response to @type {BaconActor} */
    private convertToBaconActor(data: any): BaconActor {
        const actorObject: BaconActor = {
            id: data.id,
            name: data.name || data.original_name,
            characterName: data.character || 'unknown',
        };
        return actorObject;
    };


}






