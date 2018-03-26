/* tslint:disable*/
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { LoggingService } from '../services/logging.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    pageName: string = 'Login';
    componentName: string = 'Login Form';

    constructor(private authService: AuthService, private router: Router,
                private logService: LoggingService) {
    }

    ngOnInit() {
        this.authService.getAuth().subscribe(auth => {
            if (auth) {
                this.router.navigate(['/dashboard']);
            }
        })
    }

    onSubmit() {
        this.authService.login(this.email, this.password)
            .then(res => {
                this.router.navigate(['/dashboard'])
            }).catch (err => this.logService.logMessage(err));
    }

}
