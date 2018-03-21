/* tslint:disable*/
export class CartItem {
    public productId: string;
    public quantity: number;
}

export interface Comparable {
    equals();
}

export interface CartItem extends Comparable {
    setQuantity(item: CartItem, quantity?: number);
    getQuantity();
}

export interface Cart {
    add(item: CartItem);
    remove(item: CartItem);
    getQuantity(item: CartItem);
    setQuantity(item: CartItem, quantity: number);
    isEmpty();
    getItems();
    clear();
}

export class ShoppingCart implements Cart {
    add(item: CartItem) {

    }

    remove(item: CartItem) {}
    getQuantity(item: CartItem) {}
    setQuantity(item: CartItem, quantity: number) {}
    isEmpty() {}
    getItems() {}
    clear() {}
}
