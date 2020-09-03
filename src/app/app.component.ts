import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

/* Parent */
export class AppComponent {
    seconds = 0
    interval = 0

    oddnumbers = []
    evennumbers = []

    constructor() { }

    ngOnInit(): void {

    }

    clearTimer() {
        clearInterval(this.interval);
    }

    start() {
        this.counter();
    }

    stop() {
        this.clearTimer();
    }

    private counter() {
        this.clearTimer()
        this.interval = window.setInterval(() => {
            if (this.seconds % 2 == 0) {
                this.evennumbers.push(this.seconds)
            } else {
                this.oddnumbers.push(this.seconds)
            }
            this.seconds += 1;
            console.log(this.seconds)
            if (this.seconds === 10) {
                console.log(this.oddnumbers, this.evennumbers)
            } else {
                if (this.seconds >= 10) {
                    this.seconds = 0
                    this.evennumbers = []
                    this.oddnumbers = []
                }
            }
        }, 1000);
    }
}
