

type ActorServiceParams = {
    actor_id: string;
    movie_id: string;
}



/**
 * @class ActorService
 * this class contains the logic for working with the actor data
 * regardless of the source of that data 
 */

export class ActorService {
    answer_id: string;
    movie_id: string;


    constructor(actorServiceParams: ActorServiceParams) {
        this.answer_id = actorServiceParams.actor_id;
        this.movie_id = actorServiceParams.movie_id;
    }

    getActors(movie_id: string) {
        // return this.answer_id;
    
    }

    // TODO: handle it not being the first one. in service layer
    


}    