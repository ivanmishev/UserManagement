import { Component } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.components.html',
  providers: [UserService]
})
export class AppComponent  {}
