import { LightningElement,api } from 'lwc';

export default class ChildComponentCallingMethod extends LightningElement {
    sliderValue = 100;

        @api setSliderComponentValue(inputValue){
            console.log('Value=>',inputValue);
            this.sliderValue = inputValue;
        }
}