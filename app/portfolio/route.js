import Ember from 'ember';

const projectList = Ember.$.getJSON('data/projectData.json');

export default Ember.Route.extend({
  model() {
    return projectList;
  },
});
