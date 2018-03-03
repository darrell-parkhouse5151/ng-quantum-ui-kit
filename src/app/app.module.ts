/* tslint:disable*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';

import { FormsModule } from "@angular/forms";
import { FormValidationComponent } from './form-validation/form-validation.component';
import { BirthYearValidationDirective } from './directives/birth-year.directive';
import { CountryCityValidationDirective} from "./directives/country-city.directive";
import { TelephoneNumberValidatorDirective } from './directives/telephone-number-validator.directive';
import { UniqueNameValidatorDirective } from './directives/unique-name-validator.directive';
import { ReactiveFormValidation } from "./reactive-form-validation/reactive-form-validation";
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        ShowErrorsComponent,
        FormValidationComponent,
        BirthYearValidationDirective,
        CountryCityValidationDirective,
        TelephoneNumberValidatorDirective,
        UniqueNameValidatorDirective,
        ReactiveFormValidation,
        CustomValidatorsComponent,
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
