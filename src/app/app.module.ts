/* tslint:disable*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';

import { FormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { VertNavComponent } from './vert-nav/vert-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './dashboard/leads/leads.component';
import { EmailClientComponent } from './dashboard/email-client/email-client.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';

@NgModule({
    declarations: [
        AppComponent,
        ShowErrorsComponent,
        NavbarComponent,
        VertNavComponent,
        DashboardComponent,
        LeadsComponent,
        EmailClientComponent,
        ContactsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
