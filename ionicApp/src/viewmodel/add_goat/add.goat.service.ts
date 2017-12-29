import { Injectable, Input }              from '@angular/core';
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
export class AddGoatService extends CommonService {

  private breedsUrl: string = this.mobileUrl + 'breeds';  // URL to web API
  private addGoatUrl: string = this.mobileUrl + 'goats/add';  // URL to web API

  constructor (http: Http) { super(http); }

create(goat: FormGroup): Observable<any> {

    let json = goat.value;
    //console.log("create json: " + JSON.stringify(json));
    return this.http.post(this.addGoatUrl, JSON.stringify(json))
                    .map(super.extractData)
                    .catch(super.handleError);
  }

  getBreeds(): Observable<BreedModel[]> {
    return this.http.get(this.breedsUrl)
                    .map(super.extractData)
                    .catch(super.handleError);

  }
}
