import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-profiler',
    templateUrl: 'facebook.component.html',
    styleUrls: [ 'facebook.component.css' ]

})

export class FacebookComponent {

    constructor(

    private location: Location
    ){}

    goBack(): void {
        this.location.back();
    }
}