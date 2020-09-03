import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-gamecontrol',
    templateUrl: './gamecontrol.component.html',
    styleUrls: ['./gamecontrol.component.scss']
})

/* Child */
export class GamecontrolComponent implements OnInit {

    @Input() seconds: number

    constructor() { }

    @Output("start") start: EventEmitter<any> = new EventEmitter()
    @Output("stop") stop: EventEmitter<any> = new EventEmitter()

    ngOnInit(): void {

    }
}