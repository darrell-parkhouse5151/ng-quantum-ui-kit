/* tslint:disable*/
import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from "@angular/forms";

@Directive({
    selector: '[appBirthYear]',
    providers: [{provide: NG_VALIDATORS, useExisting: BirthYearValidationDirective, multi: true}]
})
export class BirthYearValidationDirective implements Validator {

    validate(c: FormControl): ValidationErrors {
        const numValue = Number(c.value);
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 85;
        const maxYear = currentYear - 18;
        const isValid = !isNaN(numValue) && numValue >= minYear && numValue <= maxYear;

        const message = {
            'years': {
                'message': 'the year must be a valid number between ' +minYear + ' and ' + maxYear
            }
        };

        return isValid ? null : message;
    }

}
