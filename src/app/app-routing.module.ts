import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpspersonalComponent } from './npspersonal/npspersonal.component';
import { NpsinfoComponent } from './npsinfo/npsinfo.component';


export const appRoutes: Routes = [
  { path: 'personal', component: NpspersonalComponent },
  { path: 'info', component: NpsinfoComponent },
  { path: '',   redirectTo: '/info', pathMatch: 'full' },
  { path: '**', component: NpsinfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {}