import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
  readonly apiUrl: string = 'http://localhost:8080/'; //'http://sraullet.freeboxos.fr/'; // 'http://localhost:8080/';
  readonly mobileUrl: string = this.apiUrl + 'mobile/';
  protected http: Http;

  public constructor (http: Http) { this.http = http; }

  protected extractData(res: Response) {
    return res.json();
  }

  protected handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
