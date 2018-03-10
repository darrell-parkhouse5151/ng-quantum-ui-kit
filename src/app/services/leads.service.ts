/* tslint:disable*/
import {ElementRef, Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {Lead} from "../models/lead";

@Injectable()
export class LeadService {
    leadCollection: AngularFirestoreCollection<Lead>;
    leadDoc: AngularFirestoreDocument<Lead>;
    leads:  Observable<Lead[]>;
    lead: Observable<Lead>;
    id: any;
    public leadStatusId: ElementRef;
    //url: 'https://ng-quantum-ui-kit.firebaseio.com';

    constructor(private angularFirestore: AngularFirestore) {
        this.leadCollection = this.angularFirestore.collection('leads', ref => ref.orderBy('sales', 'asc'));
    }

    getLeads(): Observable<Lead[]> {
        this.leads = this.leadCollection.snapshotChanges().map(change => {
            return change.map(action => {
                const data = action.payload.doc.data() as Lead;
                data.id = action.payload.doc.id;
                return data;
            });
        });

        return this.leads;
    }

    newLead(lead: Lead) {
        this.leadCollection.add(lead);
    }

    getLead(id: string): Observable<Lead> {
        this.leadDoc = this.angularFirestore.doc<Lead>(`leads/${id}`);

        this.lead = this.leadDoc.snapshotChanges().map(action => {
            if (action.payload.exists === false) {
                return null;
            } else {
                const data = action.payload.data() as Lead;
                data.id = action.payload.id;

                console.log(data.leadStatus);
                return data;
            }
        });

        return this.lead;
    }


    updateLead(lead: Lead) {
        this.leadDoc = this.angularFirestore.doc(`leads/${lead.id}`);
        this.leadDoc.update(lead);
    }

    deleteLead(lead: Lead) {
        this.leadDoc = this.angularFirestore.doc(`leads/${lead.id}`);
        this.leadDoc.delete();
    }

    getLeadStatus(): Observable<Lead> {
        this.id = this.leadStatusId.nativeElement.getAttribute('value');
        console.log(this.id);
        return this.id;
    }
}
