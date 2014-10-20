App = Ember.Application.create();

App.Router.map(function(){
	this.resource('home');
	this.resource('projects', function(){
		this.resource('skill' , {path : ":skill"});
	});
	this.resource('resume');
	this.resource('about');
	this.resource('contact');
 	this.route("fourOhFour", { path: "*path"});
});



App.HomeRoute = Ember.Route.extend({
	model : function(){
		return window.posts;
	}
});

filterProjectsForAbility = function(abilityMap, ability){
	if (!ability || ability === "all") return projects;
	else return abilityMap[ability];
}

App.ProjectsRoute = Ember.Route.extend({
  model: function(params) {
	return projectsInformationDebug;	
  }
});

App.SkillRoute = Ember.Route.extend({
	model: function(params){
		return ProjectsModel.filterProjectsForAbility(params.skill);	
	}
});

App.FourOhFourRoute = Ember.Route.extend({
	model: function(params){
		return params;
	}
});