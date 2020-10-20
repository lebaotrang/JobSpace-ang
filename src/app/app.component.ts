import { Component } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import {SnotifyPosition, SnotifyStyle} from 'ng-snotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic';
  constructor(private _snotifyService: SnotifyService) {
    this._snotifyService.setDefaults({
      global: {
        newOnTop: true,
        maxOnScreen: 3,
      },
      toast: {
        position: SnotifyPosition.rightTop,
        pauseOnHover: true,
        timeout: 5000,
        titleMaxLength: 50
      }
    });
  }
}
