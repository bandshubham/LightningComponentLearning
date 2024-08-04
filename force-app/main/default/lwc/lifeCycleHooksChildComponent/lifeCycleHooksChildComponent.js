import { LightningElement } from 'lwc';

export default class LifeCycleHooksChildComponent extends LightningElement {
    varConstructor;
    varConnectedCallback;
    varRenderedCallback;

    constructor(){
        super();
        console.log("child constructor");
        this.varConstructor ="Child constructor is called";
    }

    connectedCallback(){
        console.log("child connected callback");
        //varConnectedCallback = "Connected Callback is called";
    }

    renderedCallback(){
        console.log("child rendered callback");
        //varRenderedCallback = "Rendered Callback is called";
    }

    disconnectedCallback(){
        window.alert("Disconnected Callback is called");
    }

    
}