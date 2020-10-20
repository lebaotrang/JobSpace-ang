import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleError } from '@core/helpers/error-handler';
import { AuthService } from '../../auth/services/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  headers: HttpHeaders;
  headersForm: HttpHeaders;
  headersNode: HttpHeaders;

  constructor(
    private _http: HttpClient,
    private _handler: HandleError,
    private _auth: AuthService
  ) {
    this.headers = this.setHeaders();
    this.headersForm = this.setHeadersForm(); // for form
    this.headersNode = this.setHeadersNode(); // for form
  }

  setHeaders(): HttpHeaders {
    const header = new HttpHeaders();
    if (!this._auth.token) { return header.set('Content-Type', 'application/json'); }
    return header.set('Content-Type', 'application/json').set('Authorization', `Bearer ${this._auth.token}`);
  }

  setHeadersForm(): HttpHeaders { // for form
    const header = new HttpHeaders();
    return header.set('Authorization', `Bearer ${this._auth.token}`);
  }

  setHeadersNode(): HttpHeaders { // for form
    const header = new HttpHeaders();
    return header.set('Authorization', `${this._auth.token}`);
  }

  get(url: string) {
    return this._http.get(url, { headers: this.headers })
    .pipe(
      map(data => {
        return data;
      }),
      catchError(error => this._handler.handle(error))
    );
  }

  post(url: string, obj: object, isForm: boolean) {
    return this._http.post(url, obj, { headers: isForm ? this.headersForm : this.headers })
    .pipe(
      map(data => {
        return data;
      }),
      catchError(error => this._handler.handle(error))
    );
  }

  put(url: string, obj: object, isForm: boolean) {
    return this._http.put(url, obj, { headers: isForm ? this.headersForm : this.headers })
    .pipe(
      map(data => {
        return data;
      }),
      catchError(error => this._handler.handle(error))
    );
  }

   delete(url: string) {
    return this._http.delete(url, { headers: this.headersForm })
    .pipe(
      map(data => {
        return data;
      }),
      catchError(error => this._handler.handle(error))
    );
  }

  deleteWithBody(url: string, body) {
    const options = {
      headers: this.headersForm,
      body: body,
    };
    return this._http.delete(url, options)
    .pipe(
      map(data => {
        return data;
      }),
      catchError(error => this._handler.handle(error))
    );
  }

}
