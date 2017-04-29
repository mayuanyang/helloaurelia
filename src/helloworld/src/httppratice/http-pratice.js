import {YoutubeService} from '../modules/youtube.service';
import {inject} from 'aurelia-framework';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';

@inject(YoutubeService)
export class HttpPratice {
  constructor(youtubeService) {
    this.term = "";
    
    this.youtubeService = youtubeService;

    this.title = "Http Pratice";
    this.description = "This pratice is to use the build in aurelia-fetch-client to fetch the videos from youtube by using youtube api. ";
    this.items = [
      {description: "Create module to talk to youtube api"},
      {description: "Use dependancy injection to inject the youtube module"},
      {description: "Use Rxjs to handle the onkeyup event with conditions of: wait for 300ms pause in events, ignore if next search term is same as previous"}
    ]
    
  }

  onkeyup() {
    var self = this;
    this.youtubeService.fetch(this.term)
      .then(response => response.json())
      .then(data => {
                self.videos = data.items;
            });;
    
  }
}