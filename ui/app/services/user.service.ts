//Inject a service as dependency we need injectable
import {Injectable} from "@angular/core";
//http module
import {Http} from '@angular/http';
//Observable through reactive extensions so we want to import map operator to map the data
import 'rxjs/add/operator/map';

import {Observable} from "rxjs/Rx";

const USER_SERVICE_URL = 'http://localhost:9000';
const USER_URL = "users";

@Injectable()
export class UserService {
  private userUrl: string;

  constructor(private http:Http) {
    console.log("User service initialized...");
  }

  getUser(id:number) {
    this.userUrl = USER_SERVICE_URL + "/" + USER_URL + "/" + id;
    return this.http.get(this.userUrl).map(res => res.json());
  }

  //TODO add pagination request sorting etc
  getUsers(sort: string, direction: string) {
    this.userUrl = USER_SERVICE_URL + "/" + USER_URL  + "?" + "sort=" + sort;
    return this.http.get(this.userUrl).map(res => res.json());
  }

  deleteUser(email:string) {
    this.userUrl = USER_SERVICE_URL + "/" + USER_URL + "/" + email;
    return this.http.delete(this.userUrl).map(res => res.json());
  }

  updateUser(firstName:string, lastName:string, email:string, birthDate:number) {
    this.userUrl = USER_SERVICE_URL + "/" + USER_URL + "/" + email;
    return this.http.post(this.userUrl, "{body of an user}").map(res => res.json());
  }

}
