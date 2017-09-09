import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    sortProjects: function(category) {


      this.get('model').forEach((project) => {

        if(category == "all"){
          Ember.set(project, "show", true);
        }
        else if(project.type.includes(category)){
          Ember.set(project, "show", true);
        }
        else {
          Ember.set(project, "show", false);
        }
      });

      this.get('model').forEach((project) => {
        project._randomPosition = Math.random();
      });
      this.set('model', this.get('model').sortBy('_randomPosition'));


    }
  }
});
