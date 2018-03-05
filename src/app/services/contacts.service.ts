/* tslint:disable*/
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../models/contact';

@Injectable()
export class ContactsService {
    contactCollection: AngularFirestoreCollection<Contact>;
    contactDoc: AngularFirestoreDocument<Contact>;
    contacts: Observable<Contact[]>;
    contact: Observable<Contact>;

    constructor(private angularFirestore: AngularFirestore) {
        this.contactCollection = this.angularFirestore.collection('contacts', ref => ref.orderBy('name', 'desc'));
    }

    getContacts() : Observable<Contact[]> {
        this.contacts = this.contactCollection.snapshotChanges().map(change => {
            return change.map(action => {
                const data = action.payload.doc.data() as Contact;
                data.id = action.payload.doc.id;
                return data;
            });
        });

        return this.contacts;
    }

    newContact(contact: Contact) {
        this.contactCollection.add(contact).then(() => {
            console.log('contact added');
        }).catch((err) => console.log(err));
    }

    getContact(id: string) : Observable<Contact> {
        this.contactDoc = this.angularFirestore.doc<Contact>(`contacts/${id}`);

        this.contact = this.contactDoc.snapshotChanges().map(action => {
            if (action.payload.exists === false) {
                return null;
            } else {
                const data = action.payload.data() as Contact;
                data.id = action.payload.id;
                return data;
            }
        });

        return this.contact;
    }

    updateContact(contact: Contact) {
        this.contactDoc = this.angularFirestore.doc(`contacts/${contact.id}`);
        this.contactDoc.update(contact).then(() => {
            console.log('contact added');
        }).catch((err) => console.log(err));
    }

    deleteContact(contact: Contact) {
        this.contactDoc = this.angularFirestore.doc(`contacts/${contact.id}`);
        this.contactDoc.delete().then(() => {
            console.log('contact added');
        }).catch((err) => console.log(err));
    }
}
