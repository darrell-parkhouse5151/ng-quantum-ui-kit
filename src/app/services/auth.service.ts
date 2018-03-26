/* tslint:disable*/
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

    constructor(private angularAuth: AngularFireAuth) {
    }

    login(email:string, password:string) {
        return new Promise((resolve, reject) => {
            this.angularAuth.auth.signInWithEmailAndPassword(email, password)
                .then(userData => resolve(userData), err => reject(err))
        });
    }

    getAuth() {
        return this.angularAuth.authState.map(auth => auth);
    }

    register(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.angularAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(userData => resolve(userData), err => reject(err))

        })
    }
}
