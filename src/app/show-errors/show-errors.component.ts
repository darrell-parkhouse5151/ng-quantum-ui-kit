/* tslint:disable*/
import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from "@angular/forms";

@Component({
    selector: 'show-errors',
    templateUrl: './show-errors.component.html',
    styleUrls: ['./show-errors.component.scss']
})
export class ShowErrorsComponent {
    private static readonly errorMessages = {
        'pattern': (params) => 'the required patter is :' + params.requiredPattern,
        'uniqueLeadName': (params) => 'name must be unique' + params.uniqueLeadName,
        'uniqueContactName': (params) => 'contact name must be unique' + params.uniqueContactName,
        'validEmail': (params) => 'email must be valid' + params.validEmail,
        'contactPhone': (params) => 'phone must be valid' + params.contactPhone
    };

    @Input()
    private control: AbstractControlDirective | AbstractControl;

    shouldShowErrors(): boolean {
        return this.control && this.control.errors && (this.control.dirty || this.control.touched);
    }

    listOfErrors(): string[] {
        return Object.keys(this.control.errors)
            .map(field => this.getMessage(field, this.control.errors[field]));
    }

    private getMessage(type:string, params: any) {
        return ShowErrorsComponent.errorMessages[type](params);
    }

}
