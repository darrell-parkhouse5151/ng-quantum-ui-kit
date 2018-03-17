/* tslint:disable*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';

import { NavbarComponent } from './navbar/navbar.component';
import { VertNavComponent } from './vert-nav/vert-nav.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './ecommerce/product-details/product-details.component';
import { ProductAddComponent } from './ecommerce/product-add/product-add.component';
import { ProductComponent } from './ecommerce/product/product.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServicesModule } from './services/services.module';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { BasicElementsModule } from './basic-elements/basic-elements.module';
import { AngularFirestore } from 'angularfire2/firestore';
import { CartComponent } from './ecommerce/cart/cart.component';
import { CartService } from './services/cart.service';
import { StorageService } from './services/storage.service';
import { OptionComponent } from './option/option.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { BasicElementsRoutingModule } from './basic-elements/basic-elements-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { EmailClientComponent } from './dashboard/email-client/email-client.component';
import { LeadsComponent } from './dashboard/leads/leads.component';

const appRoutes: Routes = [
    {
        path: 'alerts',
        component: AlertsComponent
    },
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
    declarations: [
        AppComponent,
        ShowErrorsComponent,
        NavbarComponent,
        VertNavComponent,
        ProductDetailsComponent,
        ProductAddComponent,
        ProductComponent,
        BasicElementsComponent,
        CartComponent,
        OptionComponent,
    ],
    imports: [
        BrowserModule,
        DashboardModule,
        HttpClientModule,
        ServicesModule,
        DashboardModule,
        BasicElementsModule,
        BasicElementsRoutingModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(environment.firebaseConfig, 'ng-quantum-ui-kit')
    ],
    providers: [
        AngularFirestore,
        CartService,
        StorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
