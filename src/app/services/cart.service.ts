/* tslint:disable*/
import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/product';
import {Cart} from '../models/cart';

@Injectable()
export class CartService {
    cartCollection: AngularFirestoreCollection<Product>;
    cartDoc: AngularFirestoreDocument<Product>;
    // todo: this may not be needed
    // carts: Observable<Cart[]>;
    cart: Observable<Cart>;

    constructor(private angularFireStore: AngularFirestore) {
        this.cartCollection = this.angularFireStore.collection('cart', ref => ref.orderBy('id', 'asc'));
    }

    getCart(cart: Cart): Observable<Cart> {
        this.cartDoc = this.angularFireStore.doc<Cart>(`cart/${cart.id}`);

        this.cart = this.cartDoc.snapshotChanges().map(action => {
            if (action.payload.exists === false) {
                return null;
            } else {
                const data = action.payload.data() as Cart;
                data.id = action.payload.id;
                return data;
            }
        });


        return this.cart;
    }


}
