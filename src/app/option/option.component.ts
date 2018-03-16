import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
    options = [];
    constructor() {
    }

    ngOnInit() {
        this.getSelectedOptions();
    }
    getSelectedOptions() {
        return this.options
            .filter(opt => opt.checked)
            .map(opt => opt.value);
    }

}
