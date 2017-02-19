import { Component  } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class AdditionalData extends BSModalContext {
    constructor(public num1: number, public num2: number) {
        super();
    }
}

@Component({
    moduleId: module.id,
    selector: 'my-profilerFormData',
    template:'<div>hallo</div><input/>'

})
export class ProfilerFormData implements ModalComponent<AdditionalData>
{
    context: AdditionalData;

    public wrongAnswer: boolean;

    constructor(public dialog: DialogRef<AdditionalData>) {
        this.context = dialog.context;
        this.wrongAnswer = true;
    }



    onKeyUp(value: number) {
        this.wrongAnswer = value != 5;
        this.dialog.close();
    }


    beforeDismiss(): boolean {
        return true;
    }

    beforeClose(): boolean {
        return this.wrongAnswer;
    }
}