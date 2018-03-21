/* tslint:disable*/
import {Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    pageName: string = 'Cart';
    componentName: string = 'Ecommerce Cart';
    constructor() {
    }

    ngOnInit() {
    }


}
