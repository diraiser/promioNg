import { Component, ViewContainerRef  } from '@angular/core';
import { Modal,BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Location } from '@angular/common';
import {PROFILER} from "../../mock-profiler";
import {Overlay,overlayConfigFactory} from "angular2-modal";
import {ProfilerFormData,AdditionalData} from "./profilerFormData.component";

@Component({
    moduleId: module.id,
    selector: 'my-profiler',
    templateUrl: 'profiler.component.html',
    styleUrls: [ 'profiler.component.css' ]

})

export class ProfilerComponent {
    profiles = PROFILER;
    a = new AdditionalData(2,3)

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
        this.a.showClose = true;
        this.modal.open(ProfilerFormData,overlayConfigFactory({ num1: 2, num2: 3 }));
    }
}