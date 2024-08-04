import { LightningElement,track, wire } from 'lwc';
import accountName from '@salesforce/apex/WireDecoratorCallDemo.accountNameLst'

export default class ForEachLoopDemo extends LightningElement {

@track listAccountName = [];

@wire(accountName)
accountData({data,error}){
    if(data){
        this.listAccountName = data;
    }
    if(error){
        console.log('This is the error from for each demo=>');
    }
}

}