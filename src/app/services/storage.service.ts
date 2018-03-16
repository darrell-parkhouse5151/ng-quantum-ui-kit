/* tslint:disable*/
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    constructor() {
    }

    get(key) {
        if (localStorage.getItem(key)) {
           let cart = JSON.stringify(localStorage.getItem(key));
           return JSON.parse(cart)
        }

        return false;
    }

    set(key, val) {
        if (val === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(val));
        }

        return localStorage.getItem(key);
    }
}
