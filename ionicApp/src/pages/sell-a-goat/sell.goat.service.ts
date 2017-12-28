import { Injectable, Input }              from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GoatInterface } from '../buy-a-goat/goat';
import { CommonService } from '../common/common.service';

@Injectable()
export class SellGoatService extends CommonService {

  private breedsUrl: string = this.mobileUrl + 'breeds';  // URL to web API

  constructor (http: Http) { super(http); }

create(name: string): Observable<Hero> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.heroesUrl, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getBreeds(): Observable<BreedInterface[]> {
    return this.http.get(this.breedsUrl)
                    .map(super.extractData)
                    .catch(super.handleError);

  }
}
