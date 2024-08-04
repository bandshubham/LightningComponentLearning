import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SalesforceNoobPractice extends LightningElement {

    myTitle = 'Salesforce Noob demo';

    handleClick(){
         this.showToastEventMessageDemo();

         value = this.addition(5,10);

    }

    addition =(val1,val2) => val1+val2;

    showToastEventMessageDemo(){

        const event = new ShowToastEvent ({
            title : 'Hello Good to see you',
            message : 'Happy to inform that event handles are started',
            variant  : 'success', 
        })
        this.dispatchEvent(event);
    }

}