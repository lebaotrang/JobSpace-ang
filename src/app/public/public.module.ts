import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/author-guard.service';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'job', loadChildren: () => import('./job/job.module').then(m => m.JobModule)
      },
      {
        path: 'term-condition', loadChildren: () => import('./term-condition/term-condition.module').then(m => m.TermConditionModule)
      },
      {
        path: 'privacy-policy', loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
      },
      {
        path: 'private', canActivate: [AuthGuard], loadChildren: () => import('../portal/portal.module').then(m => m.PortalModule)
      },
    ]
  }
];


@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
