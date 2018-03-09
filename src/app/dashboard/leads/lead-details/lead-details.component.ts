/* tslint:disable*/
import { Component, OnInit } from '@angular/core';
import {LeadService} from '../../../services/leads.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Lead} from '../../../models/lead';

@Component({
    selector: 'app-lead-details',
    templateUrl: './lead-details.component.html',
    styleUrls: ['./lead-details.component.scss']
})
export class LeadDetailsComponent implements OnInit {
    id:string;
    lead: Lead;
    hasSales: boolean = true;
    showSalesUpdateInput: boolean = false;
    constructor(private leadService: LeadService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        this.leadService.getLead(this.id).subscribe(lead => this.lead = lead);
    }

    updateSales() {
        this.leadService.updateLead(this.lead);
    }

    onDelete() {
        if (confirm('Are you sure')) {
            this.leadService.deleteLead(this.lead);
        }
    }

}
