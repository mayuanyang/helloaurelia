import { HttpClient } from 'aurelia-fetch-client';

export class HttpPratice {
  constructor() {
    this.term = "aurelia";
    var webapiUrl = 'https://www.googleapis.com/youtube/v3/search';
    var api_key = 'AIzaSyDrPpZkJ6tBkdCemWS3jXu6zKTipcZA7SQ';
    var url = `${webapiUrl}?q=${this.term}&part=snippet&maxResults=25&key=${api_key}`;
    console.log(url);

    this.title = "Http Pratice";
    this.description = "This pratice is to use the build in aurelia-fetch-client to fetch the videos from youtube by using youtube api. ";
    this.client = new HttpClient();
    this.client.fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

  }

  onkeyup() {

    console.log('keyup');
  }
}