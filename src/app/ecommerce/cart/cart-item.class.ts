/* tslint:disable*/
import {LoggingService} from '../../services/logging.service';

export class CartItem {
    constructor(private logService: LoggingService) { }

    public _id;
    public _name;
    public _price: number;
    public _quantity: number;
    public _data;

    setId(id) {
        if (id) this._id = id;

        else {
            this.logService.logMessage('A ID must be provided');
        }
    }

    getId() {
        return this._id;
    }

    setName(name) {
        if (name) this._name = name;

        else {
            this.logService.logMessage('a name must be provided');
        }
    }

    getName() {
        return this._name;
    }

    setPrice(price) {
        let priceFloat = parseFloat(price);

        if (priceFloat) {
            if (priceFloat <= 0) {
                this.logService.logMessage('a price must be greater 0');
            } else {
                this._price = (priceFloat);
            }
        } else {
            this.logService.logMessage('a price must be provided');
        }
    }

    getPrice() {
        return this._price;
    }

    setQuantity(quantity, relative) {
        let quantityInt = parseInt(quantity);

        if (quantityInt % 1 === 0) {
            if (relative === true) {
                this._quantity += quantityInt;
            } else {
                this._quantity = quantityInt;
            }

            if (this._quantity < 1)
                this._quantity = 1;
        } else {
            this._quantity = 1;
            this.logService.logMessage('Quantity must be an integer as was defaulted to 1');
        }
    }

    getQuantity() {
        return this._quantity;
    }

    setData(data) {
        if (data) this._data = data;
    }

    getData() {
        if (this._data)
            return this._data;

        else {
            this.logService.logMessage('this item has no data');
        }
    }

    getTotal() {
        return (this.getQuantity() * this.getPrice()).toFixed(2);
    }

    toObject() {
        return {
            id: this.getId(),
            name: this.getName(),
            price: this.getPrice(),
            quantity: this.getQuantity(),
            data: this.getData(),
            total: this.getTotal()
        }
    }
}
