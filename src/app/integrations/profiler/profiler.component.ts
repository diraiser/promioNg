import { Component, ViewContainerRef  } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Location } from '@angular/common';
import {PROFILER} from "../../mock-profiler";
import {Overlay} from "angular2-modal";
import {ProfilerFormData,AdditionalData} from "./profilerFormData.component";

@Component({
    moduleId: module.id,
    selector: 'my-profiler',
    templateUrl: 'profiler.component.html',
    styleUrls: [ 'profiler.component.css' ]

})

export class ProfilerComponent {
    profiles = PROFILER;
    constructor(
        private location: Location
        ,overlay: Overlay
        ,vcRef: ViewContainerRef
        ,public modal: Modal
    ){
        overlay.defaultViewContainer = vcRef;
    }

    goBack(): void {
        this.location.back();
    }

    getModal():void
    {
        this.modal.open(ProfilerFormData,new AdditionalData(2,3));
    }
}