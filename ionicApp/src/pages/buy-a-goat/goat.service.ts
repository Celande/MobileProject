import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GoatInterface } from './goat';

@Injectable()
export class GoatService {
  apiUrl: string = 'http://localhost:8080/'; //'http://sraullet.freeboxos.fr/';
  private goatsUrl: string = this.apiUrl + 'goats';  // URL to web API
  private imgUrl: string = this.apiUrl + 'image/';  // URL to web API
  img: any;

  constructor (private http: Http) {}

  getGoats(): Observable<GoatInterface[]> {
    return this.http.get(this.goatsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);

  }

  private extractData(res: Response) {
    //console.log("Res = " + res);
    let body = res.json();
    //console.log("Body = " + body);
    console.log("Stringify Body = " + JSON.stringify(body));
    return body;

    //return body.data;
  }

  private handleError (error: Response | any) {
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