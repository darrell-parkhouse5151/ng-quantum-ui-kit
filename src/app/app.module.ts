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
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { ContactService } from './services/contacts.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {LeadService} from './services/leads.service';
import { AngularFireDatabase } from 'angularfire2/database';

const appRoutes: Routes = [
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
    }
];

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
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(environment.firebaseConfig, 'ng-quantum-ui-kit')
    ],
    providers: [
        ContactService,
        AngularFirestore,
        LeadService,
        AngularFireDatabase
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
