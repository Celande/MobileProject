import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GoatModel } from '../../model/goat';
import { CommonService } from '../common/common.service';

@Injectable()
export class GoatsService extends CommonService {
  private goatsUrl: string = this.mobileUrl + 'goats';  // URL to web API
  private removeGoatUrl: string = this.goatsUrl + '/remove/';

  constructor (http: Http) { super(http); }

  getGoats(): Observable<GoatModel[]> {
    return this.http.get(this.goatsUrl)
                    .map(super.extractData)
                    .catch(super.handleError);

  }

  removeGoat(id: number): Observable<GoatModel> {
    let url = this.removeGoatUrl + id;
    return this.http.get(url)
    .map(super.extractData)
    .catch(super.handleError);

  }
}
