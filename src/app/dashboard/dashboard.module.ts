import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { EmailClientComponent } from './email-client/email-client.component';
import { LeadsComponent } from './leads/leads.component';
import { AddLeadComponent } from './leads/add-lead/add-lead.component';
import { LeadDetailsComponent } from './leads/lead-details/lead-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        EmailClientComponent,
        LeadsComponent,
        AddLeadComponent,
        LeadDetailsComponent,
        ContactsComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule
    ]
})

export class DashboardModule {
}
