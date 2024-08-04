public with sharing class ComboBoxWithDataTableUtility {

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts(){
        List<Account> lstOfAllAccountRecords = [SELECT Id,Name FROM Account];
        return lstOfAllAccountRecords;
    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> getRelatedContact(Id recordId){
        List<Contact> lstOfRelatedContacts = [SELECT Id,Name FROM Contact WHERE AccountId =: recordId];
        return lstOfRelatedContacts;
    }
}