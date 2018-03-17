/* tslint:disable*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicElementsRoutingModule } from './basic-elements-routing.module';
import { AlertsComponent } from '../alerts/alerts.component';

@NgModule({
    imports: [
        CommonModule,
        BasicElementsRoutingModule
    ],
    declarations: [
        AlertsComponent
    ]
})
export class BasicElementsModule {
}
