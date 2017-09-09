import Ember from "ember";

let projectList = Ember.$.getJSON("data/projectData.json");

export default Ember.Route.extend({
  model: function() {
    return projectList;
  }
});
