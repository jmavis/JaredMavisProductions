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

generateProjectsMetaData = function(projects){
	var projectsInformation = {
		projects : projects,
		abilitiesMapping : {},
	};
	var tools = {};
	var skills = {}
	projects.map(function(project){
		project.skills.map(function(skill){
			if (!projectsInformation.abilitiesMapping[skill]) projectsInformation.abilitiesMapping[skill] = [];
			projectsInformation.abilitiesMapping[skill].push(project);
			skills[skill] = skill;
		});
		project.tools.map(function(tool){
			if (!projectsInformation.abilitiesMapping[tool]) projectsInformation.abilitiesMapping[tool] = [];
			projectsInformation.abilitiesMapping[tool].push(project);
			tools[tool] = tool;			
		});
	});
	projectsInformation.tools = Object.keys(tools);
	projectsInformation.skills = Object.keys(skills);

	return projectsInformation;
};

var projectsInformationDebug = generateProjectsMetaData(projects);

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
		return filterProjectsForAbility(projectsInformationDebug.abilitiesMapping, params.skill);	
	}
});

App.FourOhFourRoute = Ember.Route.extend({
	model: function(params){
		return params;
	}
});