import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BreedInterface } from './breeds';

@Injectable()
export class BreedsService {
  apiUrl: string = 'http://localhost:8080/';
  private breedsUrl: string = this.apiUrl + 'breeds';  // URL to web API
  img: any;

  constructor (private http: Http) {}

  getBreeds(): Observable<BreedInterface[]> {
    return this.http.get(this.breedsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);

  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("Stringify Body = " + JSON.stringify(body));
    return body;
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
