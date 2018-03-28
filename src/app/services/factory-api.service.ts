import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FactoryApiService {
  BASE_URL: String = 'http://localhost:3000/api';

  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/arms-factory`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch((error) => {
        console.log(error);
      });
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/arms-factory/${id}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch((error) => {
        console.log(error);
      });
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/arms-factory/${id}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch((error) => {
        console.log(error);
      });
  }

  add(factory) {
    return this.http.post(`${this.BASE_URL}/arms-factory`, factory)
    .toPromise()
      .then((res: Response) => res.json())
      .catch((error) => {
        console.log(error);
      });
  }
}
}
