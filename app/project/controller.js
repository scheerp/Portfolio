import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    setVideo: function() {
      this.set("model.highlight.video", true);
      this.set("model.highlight.img2", false);
      this.set("model.highlight.img3", false);
    },
    setImg2: function() {
      this.set("model.highlight.video", false);
      this.set("model.highlight.img2", true);
      this.set("model.highlight.img3", false);
    },
    setImg3: function() {
      this.set("model.highlight.video", false);
      this.set("model.highlight.img2", false);
      this.set("model.highlight.img3", true);
    }
  }
});
