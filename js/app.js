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

var projects = [{
	"id": 0,
	"project_image": null,
	"project_name": "Project Undisclosed Currently",
	"worked_for": {
		"name": "Cloud Parity",
		"website": "http://www.cloudparity.com",
	},
	"role": "Member of Technical Staff",
	"timeline": "September 2013-Present",
	"skills": ["Javascript", "Objective C", "iOS", "Java", "Android", "iBeacons", "Location", "Cordova"],
	"tools": ["JIRA", "Bitbucket", "Appium", "Bluebird.js", "Backbone.js", "jQuery", "Git", "Kanban"],
	"accomplishments": [],
	"repository": null,
}, {
	"id": 1,
	"project_image": "images/OneDayLogo.png",
	"project_name": "One Day Game",
	"worked_for": {
		"name": "Relatable Games",
		"website": "http://oneday-game.com/",
	},
	"role": "Producer, Lead Programmer, Scrum Master",
	"timeline": "Fall 2012-June 2013",
	"skills": ["C#"],
	"tools": ["Unity", "Git", "Scrum"],
	"accomplishments": ["Developed and designed controls, mechanics, GUI, and AI",
						"Managed and communicated with cross-disciplinary team of 20 members",
						"Responsible for creating and maintaining UML class, state and sequence diagrams"],
	"repository": "https://github.com/10DaysLeftToLive/TimeWhaleEngine",
}, {
	"id": 2,
	"project_image": "images/TerrachanicsLogo.png",
	"project_name": "Terrachanics",
	"worked_for": {
		"name": "US Department of Energy",
		"website": "http://www.energy.gov/jobs/career-opportunities/terrachanics",
	},
	"role": "Programmer",
	"timeline": "June 2012-October 2013",
	"skills": ["Javascript", "C#", "Dynamic UI"],
	"tools": ["Unity", "Git"],
	"accomplishments": ["Performed programming tasks involving mobile/pc controls, user interface and Facebook integration"],
	"repository": "https://github.com/kuvick/DOEGame",
}, {
	"id": 3,
	"project_image": "images/BoxedMeetingLogo.png",
	"project_name": "Boxed Meeting App",
	"worked_for": {
		"name": "Boxed Meeting",
		"website": "https://play.google.com/store/apps/details?id=com.JaredMavis.boxedmeeting&hl=en",
	},
	"role": "Programmer, Designer",
	"timeline": "August 2013",
	"skills": ["Android", "Java", "Dynamic UI", "Admob", "Google Play Store", "Google Analytics"],
	"tools": ["Eclipse", "Git"],
	"accomplishments": ["Independently developed and released an Android application to the Google Play Market",
						"Integrated with Google Analytics and AdMob",
						"Designed System for dynamically sizing elements and text to account for Android screen size vairation"],
	"repository": "https://github.com/jmavis/BoxedMeeting",
}, {
	"id": 4,
	"project_image": null,
	"project_name": "JaredMavis.com",
	"worked_for": {
		"name": "Jared Mavis Productions",
		"website": "http://www.jaredmavis.com/",
	},
	"role": "Programmer, Designer",
	"timeline": "",
	"skills": ["Ember.js", "Bootstrap.js", "Handlebars.js", "jQuery", "Javascript", "CSS", "HTML"],
	"tools": ["Firebug", "Git", "Nearly Free Speech"],
	"accomplishments": ["Independently produced and design the site you are currently on",
						"Learned Ember and handlebars along with getting experience in using bootstrap.js"],
	"repository": "https://github.com/jmavis/JaredMavisProductions",
}, {
	"id": 5,
	"project_image": "images/EchoLogo.png",
	"project_name": "Echo",
	"worked_for": {
		"name": "UCSC Social Sciences",
		"website": "http://people.ucsc.edu/~swhittak/papers/Echo-CHI2013-Accepted-Final.pdf",
	},
	"role": "Programmer, UI Designer",
	"timeline": "Fall 2012-June 2013",
	"skills": ["Android", "Java", "SQL", "HCI", "Android Services"],
	"tools": ["Eclipse", "Git", "Scrum"],
	"accomplishments": ["Created system for a multi-staged survey program by integrating with existing application",
						"Quickly learned large Java code base and created significant weekly deliverables",
						"Successful private release in April 2013",
						"Worked in a team of 2"],
	"repository": null,
}, {
	"id": 6,
	"project_image": "images/MantisVideoLogo.png",
	"project_name": "Mantis Video",
	"worked_for": {
		"name": "eBay Research",
		"website": "https://labs.ebay.com/",
	},
	"role": "Programmer, UI Designer",
	"timeline": "Fall 2012-June 2013",
	"skills": ["Android", "Java", "SQL", "HCI", "Android Services", "REST API Interaction"],
	"tools": ["Eclipse", "Git", "Scrum"],
	"accomplishments": ["Was lead on Android client development and usability under mentorship of eBay research",
						"Worked in Java and  followed scrum practices over the 20 week project",
						"Designed and implemented Android application to communicate with online server",
						"Interfaced with REST style Amazon S2/S3 and Heroku cloud services",
						"Worked in a team of 5"],
	"repository": null,
}, {
	"id": 7,
	"project_image": "images/SlugmoodLogo.png",
	"project_name": "Slugmood",
	"worked_for": {
		"name": "UCSC Social Sciences",
		"website": null,
	},
	"role": "Programmer, UI Designer, Scrum Master",
	"timeline": "Fall 2012-June 2013",
	"skills": ["Android", "Java", "Wireframing"],
	"tools": ["Eclipse", "Subversion", "Scrum"],
	"accomplishments": ["Was lead on Android development and scrum master for a 7 person team",
						"Communicated with hosting professor to solidify requirements and incorporate feedback",
						"Created wireframes and UI mockups and implemented them",
						],
	"repository": null,
}];

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

var posts = [{
	"title": "hai",
}, {
	"title": "hai2",
}, {
	"title": "hai3",
}, {
	"title": "hai4",
}]

App.HomeRoute = Ember.Route.extend({
	model : function(){
		return posts;
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

posts = [{
	title: "Website update in progress",
	date: "August 10 2014",
	author: "Jared",
	content: "Hello, welcome to my site. I am currently in the process of updating everything to be based around ember.js. Feel free to look around.",
}]

App.FourOhFourRoute = Ember.Route.extend({
	model: function(params){
		return params;
	}
});