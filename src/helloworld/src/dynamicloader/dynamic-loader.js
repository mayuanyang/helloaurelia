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
      },
      {
        id: "4",
        name: "Home",
        path: "../home/home"
      }
    ];

    this.title = "Dynamic Component Loading";
    this.description = "It is quite often that you only know what components need to be loaded until runtime, Aurelia provides a dynamic loading element <compose> to accomplish that";
    this.items = [
      {description: "Add or Remove component on the fly"}, 
      {description: "Each component has its own state"}
      ];
    this.viewModels = [];
  }

  addComponent(com) {
    this.viewModels.push(com);
  }

  removeComponent(index){
    this.viewModels.splice(index, 1);
  }
}