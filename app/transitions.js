export default function() {
  const duration = 300;

  // Toplevel transiotions+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  this.transition(
    this.fromRoute('contact'),
    this.toRoute('about'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('index.contact'),
    this.toRoute('index.about'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('about'),
    this.toRoute('portfolio'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('index.about'),
    this.toRoute('index.portfilio'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('contact'),
    this.toRoute('portfolio'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('index.contact'),
    this.toRoute('index.portfolio'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('rocketbeans'),
    this.toRoute('contact'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('index.rocketbeans'),
    this.toRoute('index.contact'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('rocketbeans'),
    this.toRoute('about'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('index.rocketbeans'),
    this.toRoute('index.about'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('rocketbeans'),
    this.toRoute('portfolio'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('index.rocketbeans'),
    this.toRoute('index.portfolio'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('portfolio'),
    this.toRoute('project'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('index.portfolio'),
    this.toRoute('index.project'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('rocketbeans'),
    this.toRoute('project'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('index.rocketbeans'),
    this.toRoute('index.project'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('about'),
    this.toRoute('project'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('index.about'),
    this.toRoute('index.project'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('contact'),
    this.toRoute('project'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('index.contact'),
    this.toRoute('index.project'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
}

// Project-transition++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
