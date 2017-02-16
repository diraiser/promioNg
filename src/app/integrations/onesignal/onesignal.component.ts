import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-profiler',
    templateUrl: 'onesignal.component.html',
    styleUrls: [ 'onesignal.component.css' ]

})

export class OnesignalComponent {

    constructor(

    private location: Location
    ){}

    goBack(): void {
        this.location.back();
    }
}