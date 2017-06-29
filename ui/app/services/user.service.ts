//Inject a service as dependency we need injectable
import {Injectable} from "@angular/core";
//http module
import {Http} from '@angular/http';
//Observable through reactive extensions so we want to import map operator to map the data
import 'rxjs/add/operator/map';

import {Observable} from "rxjs/Rx";
import {User} from "../../User";

const USER_SERVICE_URL = 'http://localhost:9000';
const USER_URL = "users";

@Injectable()
export class UserService {
  private userUrl: string;
  private user: any = {};

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

  deleteUser(userId: number) {
    this.userUrl = USER_SERVICE_URL + "/" + USER_URL + "/" + userId;
    return this.http.delete(this.userUrl).map(res => res.json());
  }

  createUser(firstName: string, lastName: string, email: string, birthDate: Date){
    this.userUrl = USER_SERVICE_URL + "/" + USER_URL;
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.user.email = email;
    this.user.birthDate = new Date(birthDate).getTime();
    return this.http.post(this.userUrl, this.user).map(res => res.json());
  }

}
