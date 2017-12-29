import { Injectable }              from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { FormGroup } from '@angular/forms';

import { GoatModel } from '../../model/goat';
import { BreedModel } from '../../model/breed';
import { CommonService } from '../common/common.service';

@Injectable()
export class UpdateGoatService extends CommonService {

  private breedsUrl: string = this.mobileUrl + 'breeds';  // URL to web API
  private updateGoatUrl: string = this.mobileUrl + 'goats/update/';  // URL to web API

  constructor (http: Http) { super(http); }

  show(id: number): Observable<GoatModel> {
    let url = this.updateGoatUrl + id;
    return this.http.get(url)
    .map(super.extractData)
    .catch(super.handleError);
  }

  update(goat: FormGroup): Observable<any> {
    let json = goat.value;

    let url = this.updateGoatUrl + goat.value.id;
    //console.log("update json: " + JSON.stringify(json));
    return this.http.post(url, JSON.stringify(json))
    .map(super.extractData)
    .catch(super.handleError);
  }

  getBreeds(): Observable<BreedModel[]> {
    console.log("getBreeds");
    return this.http.get(this.breedsUrl)
    .map(super.extractData)
    .catch(super.handleError);

  }
}
