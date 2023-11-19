endpoints:

<!-- ONLY MOVIE, not tv shows. thi keeops it sisintc and a bettter like need bc too much eerything is a on tv.. -->

<!-- GET /api/check -->

POST /api/feature/get_id
<!-- we want post bc then it can be in the bodu like sage as astring in the json, so it can be queried directly as written to that db... -->
{ title: 'title' }
	=> { id: 'movie id' }
<!-- 
GET /api/feature/:feature_id/cast
	=> { cast: [ {id: 'unique from db', name: 'user friendly name'} ] } -->


<!-- NOBODY will type in the name of an actor -- actor_id is returned from cast  -->

<!-- GET /api/actor/:actor_id/features -->
<!-- => { features: [id: 'uniqu from db', title: '] } -->
