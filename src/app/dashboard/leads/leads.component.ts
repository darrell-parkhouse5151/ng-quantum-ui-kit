/* tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { LeadService} from '../../services/leads.service';
import { Lead } from '../../models/lead';

@Component({
    selector: 'app-leads',
    templateUrl: './leads.component.html',
    styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
    leads: Lead[];

    constructor(private leadService: LeadService) {
    }

    ngOnInit() {
        this.leadService.getLeads().subscribe(leads => {
            this.leads = leads;

        });
    }
}
