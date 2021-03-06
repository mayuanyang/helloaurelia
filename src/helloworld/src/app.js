export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],   nav: true,     name: 'home',  title: 'Home',      moduleId: 'home/home' },
      { route: ['validation'],    nav: true,   name: 'validation', title: 'Validation Pratice',       moduleId: 'validation/validation' },
      { route: ['http'],    nav: true,   name: 'http', title: 'Http Pratice',       moduleId: 'httppratice/http-pratice' },
      { route: ['dynamicloader'],    nav: true,   name: 'dynamicloader', title: 'Dynamic UI Composition',       moduleId: 'dynamicloader/dynamic-loader' },
      { route: ['nosql'],    nav: true,   name: 'nosql', title: 'Connect to Database',       moduleId: 'nosql/nosql' },
      { route: ['authentication'],    nav: true,   name: 'authentication', title: 'Authentication',       moduleId: 'authentication/authentication' },
      { route: ['about'],      nav: true,   name: 'about me', title: 'About Me',      moduleId: 'aboutme/aboutme' },
      { route: ['contact'],    nav: true,   name: 'contact me', title: 'Contact Me',       moduleId: 'contactme/contactme' },
    ]);
  }

  constructor() {
    this.message = 'Hello World!';
  }
}
