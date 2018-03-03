import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors} from "@angular/forms";

export class CustomValidator {
    register({value, valid}) {}
    static birthYear(c: FormControl): ValidationErrors {
        const numValue = Number(c.value);
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 85;
        const maxYear = currentYear - 18;
        const isValid = !isNaN(numValue) && numValue >= minYear && numValue <= maxYear;
        const message = {
            'year': {
                'message': 'the year must be a valid number between' + minYear + ' and '
            }
        };
        return isValid ? null : message;
    }

    static countryCity(form: FormGroup):ValidationErrors {
        const countryControl = form.get('location.country'),
            cityControl = form.get('location.city');

        if (countryControl != null && cityControl != null) {
            const country = countryControl.value;
            const city = cityControl.value;
            let error = null;

            if (country === 'France' && city !== 'paris') {
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

    static uniqueName(c?: FormControl):Promise<ValidationErrors> {
        const message = {
            'uniqueName': {
                'message': 'this name is not unique'
            }
        };

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(c.value === 'existing' ? message : null);
            }, 1000);
        });
    }

    static telephoneNumber(c:FormControl): ValidationErrors {
        const isValidPhoneNumber = /^\d{3,3}-\d{3,3}-\d{3,3}$/.test(c.value);
        const message = {
            'telephoneNumber': {
                'message': 'the phone number must be valid (xxx-xxx-xxxx, where is is a digit'
            }
        };

        return isValidPhoneNumber ? null : message;
    }

    static telephoneNumbers(form?: FormGroup): ValidationErrors {
        const message = {
            'telephoneNumbers': {
                'message': 'at least one telephone number must be entered'
            }
        };

        const phoneNumbers = <FormArray>form.get('phoneNumbers');
        const hasPhoneNumbers = phoneNumbers && Object.keys(phoneNumbers.controls).length > 0;

        return hasPhoneNumbers ? null : message;
    }

    static buildPhoneNumberComponent(c?: AbstractControl):AbstractControl {
        if (c === null) {
            return c
        } else {
            return null;
        }


    }
}
