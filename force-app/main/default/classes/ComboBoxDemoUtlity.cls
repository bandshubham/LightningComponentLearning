public class ComboBoxDemoUtlity {

    @AuraEnabled(cacheable = true)
    public static list<Account> accountList(){
        
        List<Account> accountRecList = [SELECT Id,Name FROM Account];

        return accountRecList;
    }
}