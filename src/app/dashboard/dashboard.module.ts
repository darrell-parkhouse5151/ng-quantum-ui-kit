import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailClientComponent } from './email-client/email-client.component';
import { LeadsComponent } from './leads/leads.component';
import { AddLeadComponent } from './leads/add-lead/add-lead.component';
import { LeadDetailsComponent } from './leads/lead-details/lead-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

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
        FormsModule,
        RouterModule
    ]
})

export class DashboardModule {
}
