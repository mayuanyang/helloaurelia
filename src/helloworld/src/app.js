export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],   nav: true,     name: 'home',  title: 'Home',      moduleId: 'home/home' },
      { route: ['about'],      nav: true,   name: 'about me', title: 'About Me',      moduleId: 'aboutme/aboutme' },
      { route: ['contact'],    nav: true,   name: 'contact me', title: 'Contact Me',       moduleId: 'contactme/contactme' }
    ]);
  }

  constructor() {
    this.message = 'Hello World!';
  }
}
