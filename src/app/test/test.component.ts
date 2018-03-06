/* tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact} from '../models/contact';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    contacts: Contact[];
    constructor(private contactService: ContactsService) {
    }

    ngOnInit() {
        this.contactService.getContacts().subscribe(contacts => {
            this.contacts = contacts;
        });
    }

}
