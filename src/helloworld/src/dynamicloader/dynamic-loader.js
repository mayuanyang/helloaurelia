export class DynamicLoader {
  constructor() {
    this.components = [
      {
        id: "1",
        name: "Http Pratice",
        path: "../httppratice/http-pratice"
      },
      {
        id: "2",
        name: "About Me",
        path: "../aboutme/aboutme"
      },
      {
        id: "3",
        name: "Contact Me",
        path: "../contactme/contactme"
      }
    ];

    this.title = "Dynamic Component Loading";
    this.description = "It is quite often that you only know what components need to be loaded until runtime, Aurelia provides a dynamic loading element <compose> which will helo with that";
    this.viewModels = [];
  }

  addComponent(com) {
    this.viewModels.push(com);
  }

  removeComponent(index){
    this.viewModels.splice(index, 1);
  }
}