import { LightningElement,track,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getContacts from '@salesforce/apex/LightningDataTableWithRowActionUtility.getRelatedContactRecords';
import deleteRecord from '@salesforce/apex/LightningDataTableWithRowActionUtility.deleteRecord';
import{ ShowToastEvent } from 'lightning/platformShowToastEvent';

const actions = [
    {label : 'View', Name: 'view'},
    {label : 'Delete', Name : 'delete'}
];

const columns = [
    {label : 'Contact Id', fieldName : 'Id' },
    {label : 'Contact Name', fieldName : 'Name'},
    {label : 'Contact Phone', fieldName : 'Phone'},
    {
        type:'action',
        typeAttributes: { rowActions : actions },
    }
];


export default class LightningDataTableWithRowAction extends NavigationMixin (LightningElement) {

    @api recordId;
    @track data = [];
    @track columns = columns;
    refreshTable;

    connectedCallback(){

        console.log('accountID=>', this.recordId);
            getContacts({accountId : this.recordId })
            .then(result=>{
                console.log('data=>',result);
                this.data = result;
            })
            .catch(error=>{
                console.log('Error=>',error);
            })
    }


    handleRowAction(event){
        const actionName = event.detail.action.Name;
        const rowrecordId = event.detail.row.Id;
        console.log('actionName '+actionName);
        console.log('rowrecordId '+rowrecordId);
        
        switch(actionName){
            case 'view':
                this[NavigationMixin.Navigate]({
                    type:  'standard__recordPage',
                    attributes : {
                        recordId : rowrecordId,
                        objectApiName : 'Contact',
                        actionName : 'view'
                    }
                });
            break;
            case 'delete':
                deleteRecord({recordId:rowrecordId})
                .then((result)=>{
                    if(result){
                        this.dispatchEvent(
                            new ShowToastEvent({
                                                   title : 'Success',
                                                   message : 'Your Product has been deleted successfully' ,
                                                   variant : 'success'
                            })
                        );
                    }
                })
                setTimeout(()=>{

                    window.location.reload(true);
                  
                  });
            break;
        }
    }

}