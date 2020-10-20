import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/services/author-guard.service';
import { AuthService } from './auth/services/auth.service';
import { BaseService } from '@core/services/base.service';
import { HandleError } from './core/helpers/error-handler';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { SharedModule } from '@share/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SnotifyModule,
    SharedModule,
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    AuthService,
    BaseService,
    AuthGuard,
    HandleError,
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
