import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-profiler',
    templateUrl: 'soap.component.html',
    styleUrls: [ 'soap.component.css' ]

})

export class SoapComponent {

    constructor(

    private location: Location
    ){}

    goBack(): void {
        this.location.back();
    }
}