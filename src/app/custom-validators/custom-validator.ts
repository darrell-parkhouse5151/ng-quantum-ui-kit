/* tslint:disable*/
import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidator {
    static required(c: FormControl) : Promise<ValidationErrors> {
        const message = {
            'required': {
                'message': 'this field is required'
            }
        };

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(c.value === '' ? message : null);
            })
        });
    }

    static minLength(value: number, c?:FormControl) : Promise<ValidationErrors> {
        const message = {};

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(c.value <= value ? message : null);
            });
        });
    }

    static _minLength(value: number) : ValidatorFn {
        return (control: AbstractControl) => {
            return value ? { value: control.value } : null;
        }
    }

    static uniqueContactName(c?: FormControl) : Promise<ValidationErrors> {
        const message = {};

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(c.value === 'existing' ? message : null);
            }, 1000);
        });
    }

    static uniqueLeadName(c?: FormControl) : Promise<ValidationErrors> {
        const message = {
            'uniqueLeadName': {
                'message': 'the lead name must be unique'
            }
        };

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(c.value === 'existing' ? message : null);
            }, 1000);
        });
    }


    static validEmail(c: FormControl) : ValidationErrors {
        const isValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(c.value);

        const message = {

        };

        return isValidEmail ? null : message;
    }
}
