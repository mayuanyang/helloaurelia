import { bindable } from "aurelia-framework";

export class ReadMe {     
  @bindable title = "title goes here";
  @bindable description = "description goes here";
  @bindable style = "info";
  @bindable items = [];

  contructor(){
    console.log('i am readme');
  }
}