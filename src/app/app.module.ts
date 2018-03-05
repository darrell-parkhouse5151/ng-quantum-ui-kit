/* tslint:disable*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';

import { FormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { VertNavComponent } from './vert-nav/vert-nav.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { LeadsComponent } from './navbar/dashboard/leads/leads.component';
import { ContactsComponent } from './navbar/dashboard/contacts/contacts.component';
import { EmailComponent } from './navbar/dashboard/email/email.component';

@NgModule({
    declarations: [
        AppComponent,
        ShowErrorsComponent,
        NavbarComponent,
        VertNavComponent,
        DashboardComponent,
        LeadsComponent,
        ContactsComponent,
        EmailComponent
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
