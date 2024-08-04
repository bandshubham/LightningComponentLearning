import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    name;
    dispatch;
    handleChange(event){
        this.name =event.detail.value;
        console.log(this.name);
    }

    handleClick(){
        console.log('inside event',this.name);
        this.dispatch = this.name;
        console.log('dispatch value from parent=>',this.dispatch);
    }
}