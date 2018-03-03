/* tslint:disable*/
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormGroup, ValidationErrors } from "@angular/forms";

@Directive({
    selector: '[countryCity]',
    providers: [
        {
            provide: NG_VALIDATORS, useExisting: CountryCityValidationDirective, multi: true
        }
    ]
})

export class CountryCityValidationDirective implements Validator {
    validate (form: FormGroup): ValidationErrors {
        const countryControl = form.get('location.country');
        const cityControl = form.get('location.city');

        let error = null;

        if (countryControl != null && cityControl != null) {
            const country = cityControl.value;
            const city = cityControl.value;

            if (country === 'france' && city !== 'paris') {
                error = 'if the country is france, the city must be paris'
            }

            const message = {
                'countryCity': {
                    'message': error
                }
            };

            return error ? message : null;
        }


    }
}
