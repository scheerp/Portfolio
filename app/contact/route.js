import Ember from 'ember';

const data = {
  header: 'contact',
  message: 'Contact us! JK. This is just a demo.',
};

export default Ember.Route.extend({
  model() {
    return data;
  },
});
