import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';
import { ONESIGNALE } from '../../mock-onesignal';

@Component({
    moduleId: module.id,
    selector: 'my-onesignal',
    templateUrl: 'onesignal.component.html',
    styleUrls: [ 'onesignal.component.css' ]

})

export class OnesignalComponent {
   model= ONESIGNALE;
    constructor(
        private location: Location
    ){}

    goBack(): void {
        this.location.back();
    }

    submitted = false;
    onSubmit() { this.submitted = true; }
}