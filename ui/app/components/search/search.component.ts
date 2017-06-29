import {Component, OnInit} from '@angular/core';

// Inject Spotify http service to use it
import {User} from "../../../User";
import {UserService} from "../../services/user.service";

@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'search.component.html',
  providers:[UserService]
})



export class SearchComponent implements OnInit{

  userResults: User[];
  user: User;
  constructor(private _userService:UserService){
  }

  searchUsers(sort: string, direction:string) {
    this._userService.getUsers(sort, direction).subscribe(res => {
      this.userResults = res.content;
    })
  }

  createUser(user: User) {
    alert(this.user);
  }

  updateUser() {
    alert("update User")
  }

  deleteUsers(users: User[]) {
    alert(users.toString())
  }

  ngOnInit(){
    this.searchUsers("firstName", "asc");
  }

  onSubmit(){
    alert(this.user);
  }

}
