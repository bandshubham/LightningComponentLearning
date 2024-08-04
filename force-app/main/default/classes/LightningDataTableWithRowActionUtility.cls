public with sharing class LightningDataTableWithRowActionUtility {

    @AuraEnabled
    public static list<Contact> getRelatedContactRecords(Id accountId){
        try {
            List<Contact> lstContact = [SELECT Id,Name,Phone FROM Contact WHERE accountId =: accountId];
            return lstContact;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static boolean deleteRecord(Id recordId){
        system.debug('record Id -> '+recordId);
        try {
            // List<Contact> conList = [Select id from Contact WHERE Id =: recordId];
            // system.debug('contactlist-> '+conList.size());
            delete ([Select id from Contact WHERE Id =: recordId]);
            return true;
        } catch (Exception e) {
            //return false;
            throw new AuraHandledException(e.getMessage());
        }
    }
}