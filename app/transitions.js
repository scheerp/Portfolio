export default function() {
  const duration = 500;

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

  // Portfolio-transition++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  this.transition(
    this.fromRoute('index.portfolio'),
    this.toRoute('index.portfolio'),
    this.use('explode', {
      matchBy: 'data-project-id',
      use: ['flyTo', { duration }],
    }, {
      use: ['toLeft', { duration }],
    }),
    this.reverse('explode', {
      matchBy: 'data-project-id',
      use: ['flyTo', { duration }],
    }, {
      use: ['toRight', { duration }],
    })
  );

  this.transition(
    this.childOf('.grid'),
    this.use('explode', {
      matchBy: 'data-project-id',
      use: ['flyTo', { duration, easing: [250, 15] }],
    })
  );

  this.transition(
    this.inHelper('liquid-if'),
    this.toModel(true),
    this.use('toUp'),
    this.reverse('toDown')
  );
}

// Project-transition++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
