window.projects = [{
	"id": 0,
	"project_image": null,
	"project_name": "Project Undisclosed Currently",
	"worked_for": {
		"name": "Cloud Parity",
		"website": "http://www.cloudparity.com",
	},
	"role": "Member of Technical Staff",
	"timeline": "September 2013-Present",
	"skills": ["Javascript", "Objective C", "iOS", "Java", "Android", "iBeacons", "Location", "Cordova", "Test Automation", "Mocha", "Chai", "Phantom.js"],
	"tools": ["JIRA", "Bitbucket", "Appium", "Bluebird.js", "Backbone.js", "jQuery", "Git", "Kanban"],
	"accomplishments": ["Working using Cordova for a web app on iOS and Android",
						"Handling all native Objective-C and Java programming in addition to the JavaScript web app",
						"Using Backbone, Bluebird, jQuery, and Require.",
						"Developed location matching algorithms using Android and iOS location APIs",
						"Developed coding standards and project management tools"],
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

var projectSkills = _.sortBy(_.uniq(_.flatten(_.pluck(projects, "skills"))));
var projectTools = _.sortBy(_.uniq(_.flatten(_.pluck(projects, "tools"))));

generateProjectsMetaData = function(projects){
	var projectsInformation = {
		projects : projects,
		abilitiesMapping : {},
		skills: window.projectSkills,
		tools: window.projectTools,
	};

	projects.map(function(project){
		project.skills.map(function(skill){
			if (!projectsInformation.abilitiesMapping[skill]) projectsInformation.abilitiesMapping[skill] = [];
			projectsInformation.abilitiesMapping[skill].push(project);
		});

		project.skills = _.sortBy(project.skills).join(', ');


		project.tools.map(function(tool){
			if (!projectsInformation.abilitiesMapping[tool]) projectsInformation.abilitiesMapping[tool] = [];
			projectsInformation.abilitiesMapping[tool].push(project);
		});
		project.tools = _.sortBy(project.tools).join(', ');
	});

	projectsInformation.skills.push("All");
	projectsInformation.tools.push("All");

	return projectsInformation;
};

var projectsInformationDebug = generateProjectsMetaData(projects);

window.ProjectsModel = {
	filterProjectsForAbility: function(ability) {
		if (!ability || ability === "all") return projects;
		else return projectsInformationDebug.abilitiesMapping[ability];
	},
}