import { Injectable } from '@angular/core';
import { BaseService } from '@core/services/base.service';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TermConditionService {

  urlAPI = environment.apiUrl;

  constructor(private _base: BaseService) { }

  /**
   * getTermCondition - get term & condition
   * @method GET /api/v1/user/profile/7
   * @return object
   */
  getTermCondition(): Observable<any> {
    const url = `${environment.apiUrl}/api/v1/terms-and-conditions`;
    return this._base.get(url);
  }

}
