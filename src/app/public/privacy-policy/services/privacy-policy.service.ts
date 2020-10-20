import { Injectable } from '@angular/core';
import { BaseService } from '@core/services/base.service';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivacyPolicyService {

  urlAPI = environment.apiUrl;

  constructor(private _base: BaseService) { }

  /**
   * getPrivacyPolicy - get privacy policy
   * @method GET /api/v1/privacy-policy
   * @return object
   */
  getPrivacyPolicy(): Observable<any> {
    const url = `${environment.apiUrl}/api/v1/privacy-policy`;
    return this._base.get(url);
  }

}
