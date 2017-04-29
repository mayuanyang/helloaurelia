import { bindable } from "aurelia-framework";

export class ReadMe {     
  @bindable title = "title goes here";
  @bindable description = "description goes here";
  @bindable style = "info";

  contructor(){
    console.log('i am readme');
  }
}