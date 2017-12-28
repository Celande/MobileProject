import { Injectable, Input }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GoatInterface } from '../buy-a-goat/goat';
import { CommonService } from '../common/common.service';

@Injectable()
export class GoatInformationService extends CommonService {
  private goatUrl: string = this.mobileUrl + 'goats/';  // URL to web API

  constructor (http: Http) { super(http); }

  getGoat(id: number): Observable<GoatInterface> {
    let url = this.goatUrl + id;
    return this.http.get(url)
                    .map(super.extractData)
                    .catch(super.handleError);

  }


}
