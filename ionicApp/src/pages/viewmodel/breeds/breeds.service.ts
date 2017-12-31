import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { BreedModel } from '../../model/breed';
import { CommonService } from '../common/common.service';

@Injectable()
export class BreedsService extends CommonService {
  private breedsUrl: string = this.mobileUrl + 'breeds';  // URL to web API

  constructor (http: Http) { super(http); }

  getBreeds(): Observable<BreedModel[]> {
    return this.http.get(this.breedsUrl)
                    .map(super.extractData)
                    .catch(super.handleError);

  }
}
