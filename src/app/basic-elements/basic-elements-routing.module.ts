/* tslint:disable*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {AlertsComponent} from './alerts/alerts.component';

const routes: Routes = [
    {
        path: 'basic-elements/alerts',
        component: AlertsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class BasicElementsRoutingModule {}
