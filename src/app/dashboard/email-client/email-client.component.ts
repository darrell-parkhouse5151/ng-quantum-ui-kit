/* tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Util } from '../../misc/util.class';

@Component({
    selector: 'app-email-client',
    templateUrl: './email-client.component.html',
    styleUrls: ['./email-client.component.scss']
})
export class EmailClientComponent implements OnInit {
    pageName: string = 'Email Client';
    componentName: string = 'Mailbox CRM';
    /*public elem = <HTMLInputElement> document.getElementById('test');
    public isChecked = this.elem.checked;*/
    util = new Util();

    constructor() {
    }

    ngOnInit() {
    }

    // toggleIsChecked() {
    //     this.isChecked = !this.isChecked;
    // }

    onDelete() {
        let elem = <HTMLInputElement>document.getElementById('main');
        let simpleCheckbox = <HTMLInputElement>document.getElementById('test');
        let _elem = <HTMLInputElement>this.util.getElemId('#main');
        // alert(_elem.value);
        alert(_elem.getAttribute('class'));
        // let isChecked = elem.checked;
        // let isSimpleChecked = simpleCheckbox.checked;
        //
        // let b = document.querySelector('#testing');
        // b.setAttribute("checked", "checked");
        //
        // return [isChecked, isSimpleChecked];


    }
}
