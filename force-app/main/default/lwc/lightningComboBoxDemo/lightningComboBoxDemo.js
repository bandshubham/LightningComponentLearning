import { LightningElement,track } from 'lwc';
import getAccount from '@salesforce/apex/ComboBoxDemoUtlity.accountList';

export default class LightningComboBoxDemo extends LightningElement {

    @track valueToselect = 'test';
    @track accOptions = [];
    

    get options(){
        //console.log(this.options);
        return this.accOptions;
    }

    connectedCallback(){
        getAccount()
        .then( result => {

            let arr = [];
                for(var i=0;i<result.length;i++){
                    arr.push({label : result[i].Name, value: result[i].Id});
                }
            this.accOptions = arr;
        })
        // .catch(error=>{
        //     console.log('Error in the result =>',error);
        // });
    }

    handleChange(event){
        console.log('inside the handel change event');
        console.log(event.detail.value);
        this.valueToselect = event.detail.value;
    }

    

}