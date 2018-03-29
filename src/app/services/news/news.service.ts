import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsService {
  BASE_URL: String = 'https://newsapi.org/v2/everything?';
  API_KEY: String = '&apiKey=739606a342fe4241852701ede7fff641';

  constructor(private http: Http) {}

  getNews() {
    return this.http
      .get(`${this.BASE_URL}q=arms+guns+trade+export&language=en&sortby=publishedAt&pageSize=6${this.API_KEY}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch((error) => {
        console.log(error);
      });
  }
}
