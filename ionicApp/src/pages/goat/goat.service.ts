import { Injectable, Input }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GoatInterface } from './goat';
import { CommonService } from '../common/common.service';

@Injectable()
export class GoatService extends CommonService {
  private goatsUrl: string = this.mobileUrl + 'goats';  // URL to web API

  constructor (http: Http) { super(http); }

  getGoats(): Observable<GoatInterface[]> {
    return this.http.get(this.goatsUrl)
                    .map(super.extractData)
                    .catch(super.handleError);

  }

}
