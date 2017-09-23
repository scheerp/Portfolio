export default function() {
  const duration = 300;

  this.transition(
    this.hasClass('overlay'),
    this.toValue(true),
    this.use('to-up'),
    this.reverse('fade')
  );

  this.transition(
    this.hasClass('hello-world'),
    this.toValue(true),
    this.use('to-down'),
    this.reverse('to-right')
  );
}
