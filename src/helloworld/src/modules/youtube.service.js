import { HttpClient } from 'aurelia-fetch-client';

export class YoutubeService {
    constructor() {
        this.webapiUrl = 'https://www.googleapis.com/youtube/v3/search';
        this.api_key = 'AIzaSyDrPpZkJ6tBkdCemWS3jXu6zKTipcZA7SQ';
        this.client = new HttpClient();
    }

    fetch(term) {
        console.log(term);
        var url = `${this.webapiUrl}?q=${term}&part=snippet&maxResults=25&key=${this.api_key}`;
        var result = this.client.fetch(url);
            
            console.log(result);
        return result;
    }
}