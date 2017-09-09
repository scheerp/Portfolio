import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('portfolio');
  //  this.route('portfolio.project', { path: '/project/:id' });
  this.route('project', { path: '/:id' });

  this.route('rocketbeans');
});

export default Router;
