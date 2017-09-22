import Ember from 'ember';

export default Ember.Controller.extend({
    menuIsOpen: null,
    
        actions: {
            toggleBurger() {
                this.toggleProperty("menuIsOpen")
            },
            changeRoute(routeName) {
                this.set('menuIsOpen', false);
                this.transitionToRoute(routeName);
            }
        } 

});
