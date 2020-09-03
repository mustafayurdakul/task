import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamecontrolComponent } from './components/gamecontrol/gamecontrol.component';
import { OddComponent } from './components/odd/odd.component';
import { EvenComponent } from './components/even/even.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        GamecontrolComponent,
        OddComponent,
        EvenComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
