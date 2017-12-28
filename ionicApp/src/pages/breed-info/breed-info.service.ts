import { Injectable, Input }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BreedInterface } from '../breeds/breeds';
import { CommonService } from '../common/common.service';

@Injectable()
export class BreedInfoService extends CommonService {
  private breedUrl: string = this.mobileUrl + 'breeds/';  // URL to web API

  constructor (http: Http) { super(http); }

  getBreed(id: number): Observable<BreedInterface> {
    let url = this.breedUrl + id;
    return this.http.get(url)
                    .map(super.extractData)
                    .catch(super.handleError);

  }
}
