import {Component, Input, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'page-layout',
    template: `
    <header class='page-head'>
      <h1 [innerHTML]='title'></h1>
    </header>
    <div class='content'>
      <ng-content select='section'></ng-content>
    </div>
    <footer class='page-foot'>
      <hr />
      <ng-content select='footer'></ng-content>
    </footer>
    `,
    styles: [
      "@import 'page-styles.css'",
    ],
    encapsulation: ViewEncapsulation.None
}) export class PageLayoutComponent{
  @Input() title:string;
}
