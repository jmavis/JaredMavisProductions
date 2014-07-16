App = Ember.Application.create();

App.Router.map(function(){
	this.resource('home');
	this.resource('projects');
	this.resource('resume');
	this.resource('about');
	this.resource('contact');
});