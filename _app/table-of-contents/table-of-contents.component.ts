import {Component, Input} from '@angular/core';
import {RouteParams, Router} from '@ngrx/router';
import {Observable} from 'rxjs/Rx';
import {TableOfContentsService,TableOfContentsInterface} from './table-of-contents.service';

@Component({
  selector: 'toc-nav',
  templateUrl: 'component-templates/toc-nav.component.html',
  providers: [TableOfContentsService]
}) export class TableOfContentsNavigationComponent {
  @Input() toc: TableOfContentsInterface;
  constructor(private _tocService$: TableOfContentsService) {
  }
}
