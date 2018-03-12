/* tslint:disable*/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {EmailClientComponent} from './email-client/email-client.component';
import {DashboardComponent} from './dashboard.component';
import {LeadsComponent} from './leads/leads.component';
import {LeadService} from '../services/leads.service';

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'dashboard/email',
        component: EmailClientComponent
    },
    {
        path: 'dashboard/contacts',
        component: ContactsComponent
    },
    {
        path: 'dashboard/leads',
        component: LeadsComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(dashboardRoutes)],
    providers: [LeadService],
    exports: [RouterModule]
})

export class DashboardRoutingModule {}
