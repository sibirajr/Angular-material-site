import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about';
import { GMapsExp } from './g-map/g-map.component';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'GMaps',  component: GMapsExp },
  { path: 'about', component: AboutComponent },
  { path: '**',    component: NoContentComponent },
];
