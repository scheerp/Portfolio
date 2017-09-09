import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
        return Ember.$.getJSON("data/projectData.json").then(function(data) {
          return data.filter(x => x.id === params.id)[0];
        });
  }
});
