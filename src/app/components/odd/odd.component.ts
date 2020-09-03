import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-odd',
    templateUrl: './odd.component.html',
    styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {

    @Input() seconds: number

    constructor() { }

    ngOnInit(): void {

    }

}
