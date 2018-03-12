import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpspersonalComponent } from './npspersonal/npspersonal.component';
import { NpsinfoComponent } from './npsinfo/npsinfo.component';
import { NpsresultComponent} from './npsresult/npsresult.component'

import { WizardGuard } from './nps-wizard/wizard-guard.service';
import { NpswizardService } from './nps-wizard/npswizard.service';

export const appRoutes: Routes = [
  { path: 'info', component: NpsinfoComponent },
  { path: 'personal', component: NpspersonalComponent, canActivate: [WizardGuard] },
  { path: 'result', component: NpsresultComponent, canActivate: [WizardGuard] },
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: '**', component: NpsinfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }