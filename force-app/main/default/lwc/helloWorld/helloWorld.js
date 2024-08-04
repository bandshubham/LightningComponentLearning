import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullname = "shubham";
    content = 'temp';

    nameList = ["Shubham","Ajinky","Arpit","Ganesh","Swami"];


    changeHandler(event){
        this.content = event.target.value;
    }


}