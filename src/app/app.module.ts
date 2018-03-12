import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
/* App Root */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NpsinfoComponent } from './npsinfo/npsinfo.component';
import { NpspersonalComponent } from './npspersonal/npspersonal.component';
import { NpsfooterComponent } from './npsfooter/npsfooter.component';

import { FormDataService } from './data/formData.service';
import { NpswizardService } from './nps-wizard/npswizard.service';
import { WizardGuard }        from './nps-wizard/wizard-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NpsinfoComponent,
    NpspersonalComponent,
    NpsfooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService },
  { provide: NpswizardService, useClass: NpswizardService },
  { provide: WizardGuard, useClass: WizardGuard }],
  bootstrap: [AppComponent]
})
export class AppModule { }
