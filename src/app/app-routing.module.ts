import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AnalyticsComponent }   from './integrations/analytics/analytics.component';
import { FacebookComponent }   from './integrations/facebook/facebook.component';
import { OnesignalComponent }   from './integrations/onesignal/onesignal.component';
import { ProfilerComponent }   from './integrations/profiler/profiler.component';
import { SoapComponent }   from './integrations/soap/soap.component';
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'analytics',  component: AnalyticsComponent },
    { path: 'facebook',  component: FacebookComponent },
    { path: 'onesignal',  component: OnesignalComponent },
    { path: 'profiler',  component: ProfilerComponent },
    { path: 'soap',  component: SoapComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}