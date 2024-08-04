import { LightningElement } from 'lwc';

export default class ChildComponentForCommunication extends LightningElement {

    // If I clicked here on the counter ++ in the child component value will increase in 
    // the parent and reflect on the counter variable which on the parent component helps in the communication between two components
  
    handleSub(){
        this.dispatchEvent(new CustomEvent('sub'));
    }

    handleAdd(){
        this.dispatchEvent(new CustomEvent('add'));
    }

    handleMultiplication(event){
        const mul = event.target.value;
        this.dispatchEvent(new CustomEvent('multiply',{
            detail : mul
        }))
    }
}