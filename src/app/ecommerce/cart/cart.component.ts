/* tslint:disable*/
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {isObject} from 'rxjs/util/isObject';
import {isString} from 'util';
import {Cart} from '../../models/cart';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    @Output() itemUpdated = new EventEmitter();
    public cart = {
        quantity: 0,
        total: 0,
        tax: 0,
        numberOfItems: [],
        subTotal: 0,
        id: ''
    };
    constructor() {
    }

    ngOnInit() {
    }

    addItem(id, name, price, quantity, data) {
        let inCart = this.getItemById(id);

        if (typeof inCart === 'object') {

        }
    }

    getItemById(id) {

    }

}
