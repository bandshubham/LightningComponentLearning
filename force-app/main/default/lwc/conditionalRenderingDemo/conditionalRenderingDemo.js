import { LightningElement,track,api } from 'lwc';
import getImage from '@salesforce/resourceUrl/BottelImage';
export default class ConditionalRenderingDemo extends LightningElement {
    
    @track showImage = false;
    @track labelVal = 'Show Data';
    getImage = getImage;
    
    handleClick(event){
        const label = event.target.label;
        
        if(label == 'Show Data'){
            this.labelVal = 'Hide Data';
            this.showImage = true;
        } 
        if(label == 'Hide Data'){
            this.labelVal = 'Show Data';
            this.showImage = false;
        }
    }
}