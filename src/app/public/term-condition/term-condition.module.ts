import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermConditionComponent } from './components/term-condition.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@share/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TermConditionComponent,
  }
];

@NgModule({
  declarations: [TermConditionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TermConditionModule { }
