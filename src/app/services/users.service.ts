import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  query() {
    return this.http.get('http://localhost:3000/api/v1/user').map(res => {
      return res.json();
    });
  }
}
