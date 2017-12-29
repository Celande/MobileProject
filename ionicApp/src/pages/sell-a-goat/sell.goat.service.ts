import { Injectable, Input }              from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GoatInterface } from '../buy-a-goat/goat';
import { BreedInterface } from '../breeds/breeds';
import { CommonService } from '../common/common.service';
import { FormGroup } from '@angular/forms';

@Injectable()
export class SellGoatService extends CommonService {

  private breedsUrl: string = this.mobileUrl + 'breeds';  // URL to web API
  private addGoatUrl: string = this.mobileUrl + 'goats/add';  // URL to web API

  constructor (http: Http) { super(http); }

create(goat: FormGroup): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    //headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });
    let json = goat.value;
    //let json = { message: "test" };
    console.log("create json: " + JSON.stringify(json));
    return this.http.post(this.addGoatUrl, JSON.stringify(json), headers)
                    .map(super.extractData)
                    .catch(super.handleError);
  }

  getBreeds(): Observable<BreedInterface[]> {
    console.log("getBreeds");
    return this.http.get(this.breedsUrl)
                    .map(super.extractData)
                    .catch(super.handleError);

  }
}
