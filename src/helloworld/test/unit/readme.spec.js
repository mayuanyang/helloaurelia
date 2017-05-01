import {ReadMe} from '../../src/readme/read-me';
import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('Readme', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('readme/read-me')
      .inView('<read-me title.bind="title" description.bind="description" items.bind="items" ></read-me>')
      .boundTo(
        { 
          title: 'hello world', 
          description: 'how are you', 
          items: [{description: 'item1'}, {description: 'item2'}] 
        });
  });

  it('should render title', done => {
    component.create(bootstrap).then(() => {
      // The title element
      console.log('<read-me> Start testing title element');
      const titleElement = document.querySelector('.panel-heading');
      expect(titleElement.innerHTML).toBe('<span class="glyphicon glyphicon-info-sign"></span>hello world');

      // The description element
      console.log('<read-me> Start testing description element');
      const descriptionElement = document.querySelector('.readme-descriptioin');
      expect(descriptionElement.innerHTML).toBe('how are you');

      // The items element
      console.log('<read-me> Start testing items element');
      const itemsElement = document.querySelector('.list-group');
      expect(itemsElement.innerHTML).toBe('<li class="list-group-item">item1</li><li class="list-group-item">item2</li><!--anchor-->'      );

      done();
    }).catch(e => { console.log(e.toString()) });
  });

  afterEach(() => {
    component.dispose();
  });
});
