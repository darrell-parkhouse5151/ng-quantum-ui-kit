/* tslint:disable*/
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-email-client',
    templateUrl: './email-client.component.html',
    styleUrls: ['./email-client.component.scss']
})
export class EmailClientComponent implements OnInit {
    pageName: string = 'Email Client';
    componentName: string = 'Mailbox CRM';
    constructor() {
    }

    ngOnInit() {
    }

}
