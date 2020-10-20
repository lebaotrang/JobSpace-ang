import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './components/job.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: JobComponent,
  }, 
  {
    path: ':id',
    component: JobComponent,
  }
];

@NgModule({
  declarations: [JobComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class JobModule { }
