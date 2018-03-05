/* tslint:disable*/
import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors} from "@angular/forms";

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
}
