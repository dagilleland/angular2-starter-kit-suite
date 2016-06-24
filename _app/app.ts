import {Component, Input, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import {PageLayoutComponent} from './page-layout.component';
import {TableOfContentsNavigationComponent} from './table-of-contents/table-of-contents.component';
import {TableOfContentsService, TableOfContentsInterface} from './table-of-contents/table-of-contents.service';

@Component({
  selector: 'app-root',
  template: `
  <page-layout [title]='pageTitle'>
    <nav>
      <a linkTo="/">Home</a>
      <a [linkTo]="aboutPagesPath">About</a>
      <toc-nav [toc]="toc"></toc-nav>
    </nav>
    <footer>&copy; {{year}} - A simple starter kit</footer>
    <section>
      <p>Welcome to your Angular App!</p>
      <route-view></route-view>
    </section>
  </page-layout>
  `,
  directives: [PageLayoutComponent, TableOfContentsNavigationComponent]
}) export class AppRoot{
  pageTitle: string = 'Hello Angular <small>Starter Kit</small>';
  year: number = (new Date().getFullYear());
  aboutPagesPath: string = 'about';
  toc: TableOfContentsInterface;

  constructor(private _tocService$: TableOfContentsService) {}
  ngOnInit() {
    this._tocService$.loadTableOfContent$().subscribe(x=>this.toc = x);
  }
}
