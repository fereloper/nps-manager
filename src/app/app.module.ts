import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
/* App Root */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule }   from './app-routing.module';
import { NpsinfoComponent } from './npsinfo/npsinfo.component';
import { NpspersonalComponent } from './npspersonal/npspersonal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NpsinfoComponent,
    NpspersonalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
