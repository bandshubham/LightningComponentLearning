import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    name;
    dispatch;
    crousalData = [
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description: "First card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description: "Second card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description: "Third card description."
        }
    ];


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