import { Routes } from '@ngrx/router';
import {AboutPage} from './pages/about-page.component';
import {HomePage} from './pages/home-page.component';

export const routes: Routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  }
]
