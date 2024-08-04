public with sharing class WireDecoratorCallDemo {
    public WireDecoratorCallDemo() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountRecords(){
        
        List<Account> lstAccount = [SELECT Id,Name FROM Account];
        return lstAccount;
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> accountNameLst(){

        List<Account> lstAccount = new List<Account>();

        try {
            lstAccount = [SELECT ID,Name FROM Account LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return lstAccount;
    }
}