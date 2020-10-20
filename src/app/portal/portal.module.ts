import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PortalComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }, 
      {
        path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      // { path: 'pages-error-404', component: Error404Component },
      // { path: '**', redirectTo: '/pages-error-404'},
    ]
  }
];

@NgModule({
  declarations: [PortalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PortalModule { }
