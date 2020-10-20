import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile.component';
import { SharedModule } from '@share/shared.module';
import { RatingModule } from 'ngx-bootstrap/rating';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    RatingModule.forRoot()
  ]
})
export class ProfileModule { }
