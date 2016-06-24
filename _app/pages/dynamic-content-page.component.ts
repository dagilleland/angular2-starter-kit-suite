import { Component, Injectable, OnInit, Directive, Input, ViewContainerRef, ComponentResolver, ComponentMetadata, ReflectiveInjector, ComponentFactory } from '@angular/core';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RouteParams, Router } from '@ngrx/router';


// Source: http://blog.lacolaco.net/post/dynamic-component-creation-in-angular-2/

export function createComponentFactory(resolver: ComponentResolver, metadata: ComponentMetadata): Promise<ComponentFactory<any>> {
    const cmpClass = class DynamicComponent {};
    const decoratedCmp = Component(metadata)(cmpClass);
    return resolver.resolveComponent(decoratedCmp);
}

@Directive({
    selector: 'dynamic-html-outlet',
})
export class DynamicHTMLOutlet {
  @Input() src: string;
  
  constructor(private vcRef: ViewContainerRef, private resolver: ComponentResolver) {
  }
  
  ngOnChanges() {
    if (!this.src) return;
    
    const metadata = new ComponentMetadata({
        selector: 'dynamic-html',
        template: this.src,
    });
    createComponentFactory(this.resolver, metadata)
      .then(factory => {
        const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
        this.vcRef.createComponent(factory, 0, injector, []);
      });
  }
}






















@Injectable()
export class DocLoadingService {
    constructor(private http: Http) {}
    
    getHtmlDoc(docPath:string): Observable<any> {
    // loadTableOfContents(): Observable<PageGroupInfo[]> {
        return this.http.get(docPath)
                        .map(this.extractHtml)
                        .catch(this.handleError);
    }
    
    private extractHtml(res: Response) {
        if(res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.text();
        return body || '';
    }
    
    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

@Component({
  selector: 'dynamic-content',
  template: `
    <div *ngIf="loading">Loading content...</div>
    <dynamic-html-outlet [src]="html"></dynamic-html-outlet>
  `,
  directives: [DynamicHTMLOutlet]
})
export class DynamicContentPageComponent implements OnInit {
  loading: boolean;
  html: string;
  constructor(param$: RouteParams, http: Http, router: Router) {

  }

  ngOnInit(){
    // Called after the constructor and after the first ngOnChanges
  }
}
