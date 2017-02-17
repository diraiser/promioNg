import { Component, ViewContainerRef  } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Location } from '@angular/common';
import {PROFILER} from "../../mock-profiler";
import {Overlay} from "angular2-modal";

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
        this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
            .open();
    }
}