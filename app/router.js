import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('home');
  this.route('projects');
  this.route('about');
  this.route('resume');
  this.route("fourOhFour", { path: "*path"});
});

export default Router;
