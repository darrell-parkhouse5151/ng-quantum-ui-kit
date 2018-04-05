/* tslint:disable*/
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Email } from '../models/email';
import { LoggingService } from './logging.service';

@Injectable()
export class EmailService {
    emailCollection: AngularFirestoreCollection<Email>;
    emailDoc: AngularFirestoreDocument<Email>;
    emails: Observable<Email[]>;
    email: Observable<Email>;

    constructor(private angularFirestore: AngularFirestore,
                private loggingService: LoggingService) {
        this.emailCollection = this.angularFirestore.collection('emails', ref => ref.orderBy('from', 'asc'));
    }

    getEmails(): Observable<Email[]> {
        this.emails = this.emailCollection.snapshotChanges().map(change => {
            return change.map(action => {
                const data = action.payload.doc.data() as Email;
                data.id = action.payload.doc.id;
                return data;
            });
        });

        return this.emails;
    }

    newEmail(email: Email) {
        this.emailCollection.add(email)
            .then(() => this.loggingService.logMessage('email added'))
            .catch((err) => this.loggingService.logMessage(err));
    }

    /**----- get a single email from the database -----**/
    getEmail(id: string): Observable<Email> {
        this.emailDoc = this.angularFirestore.doc<Email>(`emails/${id}`);

        this.email = this.emailDoc.snapshotChanges().map(action => {
            if (action.payload.exists === false) {
                return null;
            } else {
                const data = action.payload.data() as Email;
                data.id = action.payload.id;
                return data;
            }
        });

        return this.email;
    }

    deleteEmail(email: Email) {
        this.emailDoc = this.angularFirestore.doc(`emails/${email.id}`);
        this.emailDoc.delete()
            .then(() => this.loggingService.logMessage('Successfully removed email'))
            .catch((err) => this.loggingService.logMessage(err));
    }
}
