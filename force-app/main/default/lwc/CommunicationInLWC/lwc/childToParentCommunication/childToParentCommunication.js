import { LightningElement } from 'lwc';

export default class ChildToParentCommunication extends LightningElement {
    countVal = 0;

    handleSubstract(){
        this.countVal--;
    }
    handleAddition(){
        this.countVal++;
    }

    handleMultiplication(event){
        this.countVal *=event.detail;
    }
}