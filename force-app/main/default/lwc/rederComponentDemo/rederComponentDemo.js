import { LightningElement } from 'lwc';
import signInPage from './signInPage.html';
import signOut from './signOutPage.html';
import test from './rederComponentDemo.html';

export default class RederComponentDemo extends LightningElement {

    changePage;

    render(){
        if(this.changePage === 'SignIn'){
            return signInPage;
        } else if(this.changePage === 'SignOut'){
            return signOut;
        } else {
            return test;
        }
    }

    handleClick(event){
        this.changePage = event.target.label;
    }

    returnHome(event){
        this.changePage = event.target.label;
    }
}