import {Component, OnInit, Input} from '@angular/core';

// Inject Spotify http service to use it
import {User} from "../../../User";
import {UserService} from "../../services/user.service";

@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'search.component.html',
  inputs: ['firstName'],
  providers:[UserService]
})


export class SearchComponent implements OnInit{

  userResults: User[];

  constructor(private _userService:UserService){
  }

  searchUsers(sort: string, direction:string) {
    this._userService.getUsers(sort, direction).subscribe(res => {
      this.userResults = res.content;
    })
  }

  //TODO Catch 409 for sql dub email
  createUser(firstName: string, lastName: string, email: string, birthDate: Date) {
    this._userService.createUser(firstName, lastName, email, birthDate).subscribe(res => {
      this._userService.getUsers("firstName", "asc").subscribe(res => {
        this.userResults = res.content;
      })
    });
  }

  deleteUsers(userId: number) {
    this._userService.deleteUser(userId).subscribe(res => {
      this._userService.getUsers("firstName", "asc").subscribe(res => {
        this.userResults = res.content;
      })
    })
  }

  ngOnInit(){
    this.searchUsers("firstName", "asc");
  }


}
