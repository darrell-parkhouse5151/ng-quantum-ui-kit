/* tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    contacts: Contact[];

    constructor(private contactsService: ContactsService) { }

    ngOnInit() {
        this.contactsService.getContacts().subscribe(contacts => {
            this.contacts = contacts;
        })
    }

}
