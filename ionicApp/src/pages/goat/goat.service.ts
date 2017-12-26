import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Goat } from './goat';

@Injectable()
export class GoatService {
  private goatsUrl: string = 'http://localhost:8080/goats';  // URL to web API

  constructor (private http: Http) {}

  getGoats()/*: Observable<Goat[]> */{
    let test;
    this.http.get(this.goatsUrl).map(this.extractData).subscribe(goats=>test=goats);
    console.log(test);
    /*
    let promise = new Promise((resolve, reject) => {
    this.http.get(this.goatsUrl)
      .toPromise()
      .then(
        res => { // Success
          console.log(res.json());
          resolve();
        }
      );
  });
  return promise;
  */
  /*
    return this.http.get(this.goatsUrl);
                    //.map(this.extractData);
                    //.catch(this.handleError);
                    */
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
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
