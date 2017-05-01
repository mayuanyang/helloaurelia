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
      },
      {
        id: "5",
        name: "Authentication",
        path: "../authentication/authentication"
      }
      ,
      {
        id: "6",
        name: "Database",
        path: "../nosql/nosql"
      }
    ];

    this.title = "Dynamic UI Composition";
    this.description = "It is quite often that you only know what components need to be loaded until runtime, Aurelia provides a mechanism for dynamic UI compisition, it can instruct Aurelia what component to load at runtime by using the <compose>";
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