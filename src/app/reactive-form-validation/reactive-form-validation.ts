/* tslint:disable*/
// import { FormGroup, FormControl, FormArray, NgForm, ValidatorFn, AsyncValidator, Validators} from "@angular/forms";
// import { Component, OnInit } from '@angular/core';
//
// @Component({
//     selector: 'form-validation',
//     templateUrl: './reactive-form.validation.html',
//     styleUrls: ['./reactive-form-validation.scss']
// })
// export class ReactiveFormValidation implements OnInit {
//     public simpleForm: FormGroup;
//
//     constructor(value: any, validator?: ValidatorFn | ValidatorFn[], asyncValidator?: AsyncValidator | AsyncValidator[]) { }
//
//     ngOnInit() {
//         this.simpleForm = new FormGroup({
//             'name': new FormControl(),
//             'birthYear': new FormControl(),
//             'location': new FormGroup({
//                 'country': new FormControl(),
//                 'city': new FormControl()
//             }),
//             'phoneNumbers': new FormArray([new FormControl('')])
//         }, /*Validators.compose([FormValidationComponent.telephoneNumbers()])*/);
//     }
//
//     printSimpleForm() {
//         console.log(this.simpleForm);
//     }
//
//     register(registerForm: NgForm) {
//         console.log('registration successful');
//         console.log(registerForm.value);
//     }
// }
