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
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { AngularFirestore } from 'angularfire2/firestore';
import { CartComponent } from './ecommerce/cart/cart.component';
import { CartService } from './services/cart.service';
import { StorageService } from './services/storage.service';
import { OptionComponent } from './option/option.component';
import { FormsModule } from '@angular/forms';


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
        DashboardRoutingModule,
        BasicElementsModule,
        FormsModule,
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
