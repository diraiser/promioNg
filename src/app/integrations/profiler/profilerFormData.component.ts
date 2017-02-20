import { Component  } from '@angular/core';
import { DialogRef, ModalComponent,CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {PROFILER} from "../../mock-profiler";

export class AdditionalData extends BSModalContext {
    constructor(public num1: number, public num2: number) {
        super();
    }
}

@Component({
    moduleId: module.id,
    selector: 'modal-content',
    styles: [`
        .custom-modal-container {
            padding: 15px;
            
        }


        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
    template:`
    <div class="container-fluid custom-modal-container">
    <div class="row custom-modal-header">
    <div class="col-sm-12">
        <h1>Ich bin ein Modal</h1>
</div>
</div>
<div class="col-xs-12">
<div class="jumbotron">
<span>Profilname</span>
    <input class="form-control" type="text" #profilName autofocus>
</div>
    <button class="btn btn-default btn-lg" (click)="saveMe(profilName.value)">OK</button>
</div>
</div>`

})
export class ProfilerFormData implements CloseGuard,ModalComponent<AdditionalData>
{
    context: AdditionalData;
    profiler = PROFILER;


    constructor(public dialog: DialogRef<AdditionalData>) {
        this.context = dialog.context;


    }




    saveMe (value: string):void
    {
        var today = new Date();
        var datestring = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        this.profiler.push({name:value,created:datestring,active:false});
    }

}