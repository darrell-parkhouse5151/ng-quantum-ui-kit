/* tslint:disable*/
import {CartItem} from './cart-item';

export class ShoppingCart {
    item: CartItem[] = Array<CartItem>();
    deliveryOptionsId: string;
    grossTotal: number;
    deliveryTotal: number;
    itemsTotal: number;

    public updateFrom(src: ShoppingCart) {
        this.item = src.item;
        this.deliveryOptionsId = src.deliveryOptionsId;
        this.grossTotal = src.grossTotal;
        this.deliveryTotal = src.deliveryTotal;
        this.itemsTotal = src.itemsTotal;
    }
}
