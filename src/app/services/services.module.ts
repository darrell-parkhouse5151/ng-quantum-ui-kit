import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactService} from './contacts.service';
import {CustomerService} from './customer.service';
import {LeadService} from './leads.service';
import {LoggingService} from './logging.service';
import {ProductService} from './product.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ContactService,
        CustomerService,
        LeadService,
        LoggingService,
        ProductService
    ],
    declarations: []
})
export class ServicesModule {
}
