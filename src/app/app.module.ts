/* tslint:disable*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';

import { FormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { VertNavComponent } from './vert-nav/vert-nav.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { TestComponent } from './test-component/test.component';
import { LeadDetailsComponent } from './dashboard/leads/lead-details/lead-details.component';
import { AlertsComponent } from './basic-elements/alerts/alerts.component';
import { ProductDetailsComponent } from './ecommarce/product-details/product-details.component';
import { ProductAddComponent } from './ecommarce/product-add/product-add.component';
import { ProductComponent } from './ecommarce/product/product.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServicesModule } from './services/services.module';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';

const appRoutes: Routes = [

    {
        path: 'alerts',
        component: AlertsComponent
    },

];

@NgModule({
    declarations: [
        AppComponent,
        ShowErrorsComponent,
        NavbarComponent,
        VertNavComponent,
        TestComponent,
        LeadDetailsComponent,
        AlertsComponent,
        ProductDetailsComponent,
        ProductAddComponent,
        ProductComponent,
        BasicElementsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        DashboardModule,
        HttpClientModule,
        ServicesModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'ng-quantum-ui-kit')
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
