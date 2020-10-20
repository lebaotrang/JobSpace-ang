import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()

export class HandleError {
  constructor(
    private _router: Router, 
    private _notify: SnotifyService,
  ) {}

  handle(error: HttpErrorResponse): Observable<any> {
    // console.log(error.status === 400)
    const errors = error.error;
    const keys = Object.keys(errors);
    if (error.status >= 500) {
      this._notify.error( `${error.message}`, 'SERVER ERROR');
    } else if (error.status === 404) {
      this._notify.warning('Not Found', '404');
      window.location.replace("/#/pages-error-404");
    } else if (error.status === 401) {
      this._notify.warning('Signature has expired.');
        setTimeout(() => {
          localStorage.removeItem(environment.TOKEN);
          window.location.reload();
        }, 1500);
    } else if (error.status === 403) {
      if (errors.code !== 'AUTH_15') {
        this._notify.warning(errors.message || errors.detail || '');
        setTimeout(() => {
          localStorage.removeItem(environment.TOKEN);
          window.location.reload();
        }, 1500);
      } else {
        this._notify.warning(errors.message || errors.detail || '');
        this._router.navigate(['/not-permission']);
      }
    } else if (error.status === 0) {
      this._notify.error(error.message, 'REQUEST TIMEOUT');
    } else if (error.status === 402) {
      return throwError(error);
    } else if (error.status === 400) {
      // console.log(typeof errors.message, Object.keys(errors.message), errors.message)
      if(typeof errors.message == 'object') {
        Object.keys(errors.message).map((it) => {
          // Swal.fire('Oops...', it.charAt(0).toUpperCase() + it.slice(1) + ': ' + errors.message[it], 'error')
          this._notify.error(it.charAt(0).toUpperCase() + it.slice(1) + ': ' + errors.message[it]);
        })
      } else {
        // Swal.fire('Oops...', errors.message, 'error')
        this._notify.error(errors.message)
      }
    } else if (error.status === 200) {
    } else {
      this._notify.warning(error.status + error.message, 'UNKNOW ERROR');
    }
    return throwError(error);
  }

}

