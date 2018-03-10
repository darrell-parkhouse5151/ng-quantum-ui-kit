/* tslint:disable*/
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import {LoggingService} from './logging.service';

@Injectable()
export class ProductService {
    productCollection: AngularFirestoreCollection<Product>;
    productDoc: AngularFirestoreDocument<Product>;
    products: Observable<Product[]>;
    product: Observable<Product>;

    constructor(private angularFirestore: AngularFirestore,
                private loggingService: LoggingService) {
        this.productCollection = this.angularFirestore.collection('products', ref => ref.orderBy('name', 'asc'));
    }

    getProducts(): Observable<Product[]> {
        this.products = this.productCollection.snapshotChanges().map(change => {
            return change.map(action => {
                const data = action.payload.doc.data() as Product;
                data.id = action.payload.doc.id;
                return data;
            });
        });

        return this.products;
    }

    newProduct(product:Product) {
        this.productCollection.add(product)
            .then(() => this.loggingService.logMessage('Product successfully added'))
            .catch((error) => this.loggingService.logMessage(error));
    }

    getProduct(id:string) : Observable<Product> {
        this.productDoc = this.angularFirestore.doc<Product>(`products/${id}`);
        this.product = this.productDoc.snapshotChanges().map(action => {
            if (action.payload.exists === false) {
                return null;
            } else {
                const data = action.payload.data() as Product;
                data.id = action.payload.id;
                return data;
            }
        });

        return this.product;
    }
/*
todo: figureout a way to make this work
private quantity: any;

getQuantity(product:Product) {
    this.quantity = this.angularFirestore.doc(`products/${product.id}/${product.quantity}`)
} */

    updateProduct(product:Product) {
        this.productDoc = this.angularFirestore.doc(`products/${product.id}`);

        this.productDoc.update(product)
            .then(() => this.loggingService.logMessage('Product successfully updated'))
            .catch((err) => this.loggingService.logMessage(err));
    }
    deleteProduct(product:Product) {
        this.productDoc = this.angularFirestore.doc(`products/${product.id}`);

        this.productDoc.delete()
            .then(() => this.loggingService.logMessage('Product successfully deleted'))
            .catch((err) => this.loggingService.logMessage(err));
    }
}
