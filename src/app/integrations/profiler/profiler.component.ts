import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-profiler',
    templateUrl: 'profiler.component.html',
    styleUrls: [ 'profiler.component.css' ]

})

export class ProfilerComponent {

    constructor(

    private location: Location
    ){}

    goBack(): void {
        this.location.back();
    }
}