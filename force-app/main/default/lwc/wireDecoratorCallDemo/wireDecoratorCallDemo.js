import { LightningElement,wire,track } from 'lwc';
import getAccountRec from '@salesforce/apex/WireDecoratorCallDemo.getAccountRecords'
const columns = [
    {label : 'Name', fieldName : 'Name'},
    {label : 'Id', fieldName : 'Id'}
];
export default class WireDecoratorCallDemo extends LightningElement {
    @track columns = columns;
    @track data = [];

    @wire(getAccountRec) 
    accRecordData({data,error}){
        if(data){
            this.data = data;
            //console.log('inside the data');
            //console.log(data);
        } else if(error){
            //console.log('No data found');
        }
    }
}