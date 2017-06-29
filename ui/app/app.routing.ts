import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';


//No hash strategy for routes without dynamic parameters
const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
