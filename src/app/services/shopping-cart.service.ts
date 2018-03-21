/* tslint:disable*/
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable()
export class ShoppingCartService {

    constructor() {
    }

    public items = [];

    add(item: CartItem) {
        let index = this.items.indexOf(item);

        if (index == -1) {
            this.items.push(item);
        } else {
            item = this.items[index];
            item.setQuantity(item, item.getQuantity() + 1);
        }
    }

    remove(item: CartItem) {
        let index = this.items.indexOf(item);

        if (index === -1) {
            throw new Error('The item isn\'t inside the cart');
        }

        // item = this.items[item]
        let quantity = item.getQuantity() - 1;

        if (quantity > 0) {
            item.setQuantity(item, quantity);
        } else {
            this.items.splice(index, 1);
        }
    }

    getQuantity(item: CartItem) {
        let index = this.items.indexOf(item);

        if (index === -1) {
            return 0;
        } else {
            return this.items[index].getQuantity();
        }
    }

    setQuantity(item: CartItem, quantity: number) {
        if (quantity < 1) {
            throw new Error('A positive quantity is required');
        }

        let index = this.items.indexOf(item);

        if (index == -1) {
            item.setQuantity(item, quantity);
        } else {
            this.items.push(item);
            item.setQuantity(item, quantity);
        }
    }

    isEmpty() {
        return (this.items.length > 1);
    }

    getItems() {
        return this.items;
    }

    clear() {
        this.items = [];
    }

}
