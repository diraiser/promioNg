import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent }  from './app.component';
import { IntegrationService }   from './integration.service';
import { AppRoutingModule }     from './app-routing.module';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { AnalyticsComponent }   from './integrations/analytics/analytics.component';
import { FacebookComponent }   from './integrations/facebook/facebook.component';
import { OnesignalComponent }   from './integrations/onesignal/onesignal.component';
import { ProfilerComponent }   from './integrations/profiler/profiler.component';
import { SoapComponent }   from './integrations/soap/soap.component';
import {ProfilerFormData} from "./integrations/profiler/profilerFormData.component";


@NgModule({
  imports:      [
      BrowserModule
      ,AppRoutingModule
      ,FormsModule
      ,ModalModule.forRoot()
      ,BootstrapModalModule
  ],
  declarations: [
      AppComponent
      ,DashboardComponent
      ,AnalyticsComponent
      ,FacebookComponent
      ,OnesignalComponent
      ,ProfilerComponent
      ,SoapComponent
      ,ProfilerFormData


  ],
  providers: [
    IntegrationService
  ],
  bootstrap:    [ AppComponent ],
    entryComponents: [ ProfilerFormData ]
})
export class AppModule { }
