import {ValidationRules} from 'aurelia-validation';
import {ValidationControllerFactory} from 'aurelia-validation';
import {inject} from 'aurelia-framework';

let model = {
      require : "",
      email : "",
      username : ""
    }
    
    ValidationRules      
    .ensure('require')
      .required()
      .withMessage(`Require cannot be blank.`)
    .ensure('email')
      .required()
      .email()
    .ensure('username')
      .required()
      .minLength(10)
      .maxLength(50)
    .on(model);

@inject(ValidationControllerFactory)
export class Validation {     
  constructor(controllerFactory) {
    
    this.title = 'Aurelia Validation';
    this.description = "This pratice is to use the aurelia-validation to validate data";
    this.items = [
      { description: "aurelia-validation" },
      { description: "Require field validator" },
      { description: "Email validator" },
      { description: "Min/max length validator" },
      { description: "Use ValidationControllerFactory" }
    ];

    this.model = model;
    
    this.controller = controllerFactory.createForCurrentScope();

  }

  validate(){
    console.log(this.model);
    console.log('validating');
    this.controller.validate().then(result => {
    if (result.valid) {
      console.log('all good');
    } else {
      console.log(result);
    }
  });
  }
}