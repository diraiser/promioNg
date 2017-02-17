import { Component, Input } from '@angular/core';
import { Location }                 from '@angular/common';
import {IPS} from "../../mock-ips";

@Component({
    moduleId: module.id,
    selector: 'my-soap',
    templateUrl: 'soap.component.html',
    styleUrls: [ 'soap.component.css' ]

})

export class SoapComponent {
    ips = IPS;
    constructor(

     private location: Location
    ){}

    goBack(): void {
        this.location.back();
    }
    enrich(value: string):void
    {
        this.ips.push({address:value});
    }
    apiKey = '4F94410244A6B858b5Be4D035DdDEc4A';


}