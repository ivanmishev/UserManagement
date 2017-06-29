import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NavbarComponent} from "./components/navbar/navbar.component";

import {AppComponent}  from './app.component';
import {AboutComponent} from "./components/about/about.component";
import {SearchComponent} from "./components/search/search.component";
import {routing} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';



@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpModule, Ng2Bs3ModalModule],
  declarations: [AppComponent, NavbarComponent, SearchComponent, AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
