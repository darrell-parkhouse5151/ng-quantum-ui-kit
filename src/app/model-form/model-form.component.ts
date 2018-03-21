/* tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-model-form',
    templateUrl: './model-form.component.html',
    styleUrls: ['./model-form.component.scss']
})
export class ModelFormComponent implements OnInit {
    simpleModelForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.simpleModelForm = this.formBuilder.group({
            'name': Validators.required
        })
    }

    register(form: NgForm) {

    }

}
