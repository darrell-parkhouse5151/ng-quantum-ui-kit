/* tslint:disable*/
import {Component, OnInit, ViewChild} from '@angular/core';
import { Lead } from '../../../models/lead';
import { LeadService } from '../../../services/leads.service';
import { Router } from '@angular/router';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {CustomValidator} from '../../../custom-validators/custom-validator';

@Component({
    selector: 'app-add-lead',
    templateUrl: './add-lead.component.html',
    styleUrls: ['./add-lead.component.scss']
})
export class AddLeadComponent implements OnInit {
    lead: Lead = {
        company: '',
        contactName: '',
        leadStatus: '',
        sales: 0,
        leadTitle: ''
    };
    @ViewChild('leadForm') private form: FormGroup;
    constructor(private leadService: LeadService,
                private router: Router) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            'company': new FormControl('', Validators.required),
            'contactName': new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(28),
            ])
        })
    }
    onSubmit({value, valid}: {value: Lead, valid: boolean}) {
        if (!valid) {

        } else {
            this.leadService.newLead(value);
        }

        this.router.navigate(['/dashboard']);
    }

}
