export class Home {     
  constructor() {
    this.message = 'Welcome to my Aurelia Pratices';
    this.style = "default";
    this.description = "Please click on the following cards to see what the pratice is";
    
  }

  attached() {
        console.log("attached");
    }
 
    activated() {
        console.log("activated");
    }
 
    created() {
        console.log("created");
        this.screenWidth = screen.width-100;
    }
 
    activate() {
        console.log("activate");
        this.screenWidth = screen.width-100;
    }
 
    canActivate() {
        console.log("canActivate");
    }
}