import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "./custom-validator";
import {OnInit} from "@angular/core";

export class ReactiveForms implements OnInit{
    form: FormGroup;

    constructor(private fb: FormBuilder) {}
    ngOnInit() {
        this.validate();
        this.initWithFormBuilder();
    }
    validate() {
        this.form = new FormGroup({
            'name': new FormControl('', Validators.required, CustomValidator.uniqueName),
            'birthYear': new FormControl('', [
                Validators.required,
                CustomValidator.birthYear
            ]),
            'location': new FormGroup({
                'country': new FormControl('', Validators.required),
                'city': new FormControl()
            }, CustomValidator.countryCity),
            'phoneNumbers': new FormArray([CustomValidator.buildPhoneNumberComponent()])
        }, Validators.compose([CustomValidator.countryCity, CustomValidator.telephoneNumber]))
    }
    initWithFormBuilder() {
        this.form = this.fb.group({
            'name': ['', Validators.required, CustomValidator.uniqueName()],
            'birthYear': ['', [Validators.required, CustomValidator.birthYear]],
            'location': this.fb.group({
                'country': ['', Validators.required]
            }),
            'phoneNumbers': this.fb.array([CustomValidator.buildPhoneNumberComponent()])
        }, {
            validator: Validators.compose([CustomValidator.countryCity, CustomValidator.telephoneNumbers])
        });
    }

    // todo: refactor this code


}
