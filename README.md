# helloaurelia
This project is to pratise how to use Aurelia. I have been doing Angularjs, Angular 2 and ReactJS, and i think Aurelia is a awesome.

## Demo
The demo for this project has now deployed to my github page, [click here to have a look](https://mayuanyang.github.io)

## Installation
Install aurelia-cli from npm or your package manager
Install all the packages in this project
Open a command prompt in src/heloworld and type in "au run", type in type in "au run --watch" for watch mode


## Scope
A real world application usually has a frontend, a backend api with database to feed the content and authentication. This project will focus on these 3 big categories as well as their sub categories.

### Frontend
1. Aurelia
 * Aurelia-cli
 * Templating
 * Router
 * Validation
 * Data binding
 * Behavior binding
 * Http with aurelia-fetch-client
 * Dynamic UI Composition with <compose>
 * Service module
 * Dependancy Injection
 * Authentication with Auth0, Firebase integration
 * Nosql database integration, Firebase integration
2. Testing
 * Karma
 * aurelia-testing

### Backend
1. youtube api
2. firebase database api

### Authentication
1. firebase authentication with google login

## Note
I have learned a lot of Aurelia cool features in this project

### Convention
Aurelia is very convention based, component's html and javascript files are hooked up by convention by default and also can be overriden which make it very flexiable

### Unintrusive
As it is convention based by default, the component js file does not need to import a lot of stuff until you need, no mandatory attribute is required and most of the time the component's javascript file is just plain javascript

### Non Dirty Checking
Unlike Angular2 and ReactJS, Aurelia follows the pub/sub pattern that only update the element if the model has changed without dirty checking each element, also unlike ReactJS has a virtual DOM for diff, Aurelia knows exactly which element to update hence save memory and CPU time

### Dynamic UI Composition
Aurelia provides a way to dynamicly load component and compose the way you like at run time
