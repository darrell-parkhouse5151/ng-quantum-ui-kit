/* tslint:disable*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';

import { FormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        ShowErrorsComponent,
        NavbarComponent
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
