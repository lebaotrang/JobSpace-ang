import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './components/privacy-policy.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@share/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyComponent,
  }
];

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PrivacyPolicyModule { }
