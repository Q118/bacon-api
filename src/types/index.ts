/**
 * @type BaconActor
 * actor return type
 */
export type BaconActor = {
    /** unique defined from db */
    id: string;
    /** user friendly name */
    name: string;
};

/**
 * @type BaconFeature
 * feature return type
 * a feature is anything the actor has a credit in.
 */
export type BaconFeature = {
    /** unique defined from db */
    id: string;
    /** user friendly title */
    title: string;
};



/**
 * @type BaconFeatureList
 * feature list return type
 */
export type BaconFeatureList = {
    /** the id of the actor assigned by db  */
    id: string;
    features: BaconFeature[];
};

/**
 * @type BaconActorList
 * actor list return type
 */
export type BaconActorList = {
    /** the id of the movie assigned by db  */
    id: string;
    actors: BaconActor[];
};