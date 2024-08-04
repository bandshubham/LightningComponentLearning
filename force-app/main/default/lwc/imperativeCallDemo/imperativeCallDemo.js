import { LightningElement,track } from 'lwc';
import getAccountRec from '@salesforce/apex/WireDecoratorCallDemo.getAccountRecords';

const column = [
    {label : 'Name', fieldName : 'Name'},
    {label : 'Id', fieldName : 'Id'}
]
export default class ImperativeCallDemo extends LightningElement {
    @track data =[];
    @track columns = column;
    error;

    async connectedCallback(){
        try{
            this.data = await getAccountRec();
        }catch{
            this.error = error;
        }
    }
  

}