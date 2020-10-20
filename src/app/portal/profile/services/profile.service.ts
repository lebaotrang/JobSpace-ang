import { Injectable } from '@angular/core';
import { BaseService } from '@core/services/base.service';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  urlAPI = environment.apiUrl;

  constructor(private _base: BaseService) { }

  /**
   * getProfile - get profile current user
   * @method GET /api/v1/user/profile/7
   * @return object
   */
  getProfile(id): Observable<any> {
    const url = `${environment.apiUrl}/api/v1/user/profile/${id}`;
    return this._base.get(url);
  }

  /**
  * updateProfile - update profile of current user
  * @method PUT /api/v1/user/profile/7
  * @param body data of profile to update
  */
  updateProfile(body): Observable<any> {
    const url = `${environment.apiUrl}/api/v1/user/profile`;
    return this._base.put(url, body, false);
  }
}
