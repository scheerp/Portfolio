import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    setVideo() {
      this.set('model.highlight.video', true);
      this.set('model.highlight.img2', false);
      this.set('model.highlight.img3', false);
    },
    setImg2() {
      this.set('model.highlight.video', false);
      this.set('model.highlight.img2', true);
      this.set('model.highlight.img3', false);
    },
    setImg3() {
      this.set('model.highlight.video', false);
      this.set('model.highlight.img2', false);
      this.set('model.highlight.img3', true);
    },
  },
});
