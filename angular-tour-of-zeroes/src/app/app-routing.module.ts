import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';

import { ZeroDetailComponent }  from './zero-detail.component';
import { ZeroesComponent }      from './zeroes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'zeroes',
    component: ZeroesComponent
  },
  {
    path: 'zero/:id',
    component: ZeroDetailComponent
  }
];    


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }