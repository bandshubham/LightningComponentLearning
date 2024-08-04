import { LightningElement,track } from 'lwc';
import getAccount from '@salesforce/apex/ComboBoxWithDataTableUtility.getAccounts';
import getContact from '@salesforce/apex/ComboBoxWithDataTableUtility.getRelatedContact';

const columns = [
    {label : 'Contact Id', fieldName: 'Id'},
    {label :  'Contact Name', fieldName : 'Name'},
 ];

export default class ComboBoxWithDataTable extends LightningElement {
    @track accountOptions = [];
    @track values = '';
    @track contactOptions = [];
    @track data = [];
    @track column = columns;
    @track isVisiable = false;

    getOptions()
    {
        return this.accountOptions;
    }

    connectedCallback(){
        getAccount()
        .then(result=>{
            let arr = [];
            for(var i = 0; i< result.length;i++){
                arr.push({label : result[i].Name , value : result[i].Id});
            }

            this.accountOptions = arr;
        })
    }

    handleChange(event){
        this.values = event.detail.value;
        getContact({ recordId : event.detail.value})
        .then(result=>{
            if(result.length != 0){
                this.data = result;
                this.isVisiable = true;
            }
        })
    }
}