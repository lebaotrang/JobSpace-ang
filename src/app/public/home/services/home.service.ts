import { Injectable } from '@angular/core';
import { BaseService } from '@core/services/base.service';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  urlAPI = environment.apiUrl;

  constructor(private _base: BaseService) { }

  /**
   * getCategories - get all categories without pagination
   * @method GET /category
   * @return object
   */
  getCategories(): Observable<any> {
    const url = `${environment.apiUrl}/api/v1/category`;
    return this._base.get(url);
  }

  /**
   * getCategories - get all categories without pagination
   * @method GET /category
   * @return object
   */
  getJobsByCategory(param): Observable<any> {
    let url = `${environment.apiUrl}/api/v1/job?page=${param.page}&per_page=${param.pageSize}`;
    if(param.category_id) {
      url += `&category_id=${param.category_id}`
    }
    if(param.distance_id) {
      url += `&distance=${param.distance_id}`
    }
    if(param.zip_code) {
      url += `&zip_code=${param.zip_code}`
    }
    if(param.key_word) {
      url += `&key_word=${param.key_word}`
    }
    if(param.latitude && param.longitude && param.zipcode) {
      url += `&latitude=${param.latitude}&longitude=${param.longitude}&zip_code=${param.zipcode}`
    }
    return this._base.get(url);
  }

  /**
   * getLatLngByZipcode - get latitude longitude from zipcode
   * @method GET /api/v1/convert-zip-code
   * @return object
   */
  getLatLngByZipcode(data): Observable<any> {
    const url = `${environment.apiUrl}/api/v1/convert-zip-code`;
    return this._base.post(url, data, false);
  }

}
