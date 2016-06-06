import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppRoot} from './app';
import {routes} from './app.routes';
import {provideRouter} from '@ngrx/router';

bootstrap(AppRoot, [
  // provideStore({logs, course}) // The store that defines our app state
  provideRouter(routes)
]);
