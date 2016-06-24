import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {RouteParams, Router} from '@ngrx/router';

export interface PageInterface {
  id: string,
  title: string,
  path: string
}
export interface TableOfContentsInterface {
  pages: Array<PageInterface>
}

// Provides access to the table of contents
@Injectable()
export class TableOfContentsService {
  
  private tocPath = 'toc.json';
  constructor(private _http: Http, private _param$: RouteParams, private _router: Router) {

  }

  loadTableOfContent$():Observable<TableOfContentsInterface> {
    return this._http.get(this.tocPath)
           .map(this.extractData)
           .catch(this.handleError)
           .share();
  }

  private extractData(res: Response) {
    if(res.status < 200 || res.status >= 300) {
      throw new Error('Unexpected response status: ' + res.status);
    }
    let content = res.json();
    return content || {};
  }
  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
