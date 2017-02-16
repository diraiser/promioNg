import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-profiler',
    templateUrl: 'analytics.component.html',
    styleUrls: [ 'analytics.component.css' ]

})

export class AnalyticsComponent {

    constructor(

    private location: Location
    ){}

    goBack(): void {
        this.location.back();
    }
}