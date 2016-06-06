import {Component, Input, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import {PageLayoutComponent} from './page-layout.component';

@Component({
  selector: 'app-root',
  template: `
  <page-layout [title]='pageTitle'>
    <footer>&copy; {{year}} - A simple starter kit</footer>
    <section>
      <p>Welcome to your Angular App!</p>
    </section>
  </page-layout>
  `,
  directives: [PageLayoutComponent]
}) export class AppRoot{
  pageTitle: string = 'Hello Angular <small>Starter Kit</small>';
  year: number = (new Date().getFullYear()); 
}
