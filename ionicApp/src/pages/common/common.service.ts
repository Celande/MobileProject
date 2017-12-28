import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
  readonly apiUrl: string = 'http://localhost:8080/';
  readonly mobileUrl: string = this.apiUrl + 'mobile/';
  protected http: Http;

  public constructor (http: Http) { this.http = http; }

  protected extractData(res: Response) {
    let body = res.json();
    //console.log("Stringify Body = " + JSON.stringify(body));
    return body;
  }

  protected handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
