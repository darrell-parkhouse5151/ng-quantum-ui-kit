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
import { AngularFirestore } from 'angularfire2/firestore';
import { CartComponent } from './ecommerce/cart/cart.component';
import { CartService } from './services/cart.service';
import { StorageService } from './services/storage.service';
import { OptionComponent } from './option/option.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { EmailClientComponent } from './dashboard/email-client/email-client.component';
import { LeadsComponent } from './dashboard/leads/leads.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ModelFormComponent } from './model-form/model-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeadDetailsComponent } from './dashboard/leads/lead-details/lead-details.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterComponent } from './register/register.component';
import { FlashMessagesService } from 'angular2-flash-messages';
import { EmailService } from './services/email.service';

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
    {
        path: 'dashboard/leads/:id',
        component: LeadDetailsComponent
    },
    {
        path: 'ecommerce/cart',
        component: CartComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
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
        CartComponent,
        OptionComponent,
        AlertsComponent,
        ModelFormComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [
        BrowserModule,
        DashboardModule,
        HttpClientModule,
        ServicesModule,
        DashboardModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(environment.firebaseConfig, 'ng-quantum-ui-kit')
    ],
    providers: [
        AngularFirestore,
        CartService,
        StorageService,
        ShoppingCartService,
        AuthService,
        AngularFireAuth,
        FlashMessagesService,
        EmailService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
