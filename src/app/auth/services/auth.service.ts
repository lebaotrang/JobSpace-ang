import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Observer } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { HandleError } from '@core/helpers/error-handler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlAPI = environment.apiUrl;
  isLoggedIn = false;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _handler: HandleError
    ) {
    if (this.token) { this.isLoggedIn = true; }
  }
  get token() {
    return localStorage.getItem(environment.TOKEN) || null;
  }

  set token(token) {
    localStorage.setItem(environment.TOKEN, token);
  }

  get idUser() {
    return localStorage.getItem('idUser') || null;
  }

  set idUser(id) {
    localStorage.setItem('idUser', id);
  }

  login(data): Observable<any> {
    const url = `${this.urlAPI}/api/v1/user/login`;
    return this._http.post(url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(
        map(res => {
          return res;
        }),
        tap(dt => {
          this.isLoggedIn = true;
          this.idUser = dt['data'].id;
          this.token = dt['data'].token;
        }),
        catchError(error => this._handler.handle(error))
      );
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem(environment.TOKEN);
    localStorage.removeItem('idUser');
    window.location.reload();
    // this._router.navigate(['/login'])
  }

  regiter(body): Observable<any> {
    const url = `${this.urlAPI}/api/v1/user/register`;
    return this._http.post(url, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(
        map(res => {
          return res;
        }),
        tap(dt => {
          console.log(dt);
        }),
        catchError(error => this._handler.handle(error))
      );
  }

}
