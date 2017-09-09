import Ember from 'ember';

let data = {
  header: 'about',
  message: 'Hello there, welcome to my Portfolio-Page. My Name is Peter Patrick Scheer, I am studiyng "Interactive Media" at the University of applied Sciences in Augsburg. Ihave a passion for web-development, and all kinds of animations, 2D or 3D.',
  img: 'assets/images/paddy.jpg'
}

export default Ember.Route.extend({

model(){
  return data;
}

});
