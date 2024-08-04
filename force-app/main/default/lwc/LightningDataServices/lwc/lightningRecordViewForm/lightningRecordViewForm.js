import { LightningElement,api } from 'lwc';
import NAME from '@salesforce/schema/Account.Name';

export default class LightningRecordViewForm extends LightningElement {

    @api objectApiName;
    nameField = NAME;
    objectApiName = 'Account';

}