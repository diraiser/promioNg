import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { IntegrationService }   from './integration.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
      BrowserModule
      ,AppRoutingModule
  ],
  declarations: [
      AppComponent
      ,DashboardComponent

  ],
  providers: [
    IntegrationService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
