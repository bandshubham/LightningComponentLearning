
import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    varConstructor;
    varConnectedCallback;
    varRenderedCallback;
    child = false;

    constructor(){
        super();
        console.log("Parent constructor");
        this.varConstructor ="Parent constructor is called";
    }

    connectedCallback(){
        console.log("Parent connected callback");
        //varConnectedCallback = "Parent Connected Callback is called";
    }

    renderedCallback(){
        console.log("Parent rendered callback");
        //varRenderedCallback = "Parent Rendered Callback is called";
    }

    callTheChildComponent(){
        this.child = !this.child;
    }

    disconnectedCallback(){
        window.alert("Disconnected Callback is called from parent");
    }
    
}