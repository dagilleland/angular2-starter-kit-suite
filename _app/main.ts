import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppRoot} from './app';
import {routes} from './app.routes';
import {provideRouter} from '@ngrx/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {TableOfContentsService} from './table-of-contents/table-of-contents.service';

bootstrap(AppRoot, [
  // provideStore({logs, course}) // The store that defines our app state
  provideRouter(routes),
  HTTP_PROVIDERS,
  TableOfContentsService
]);
