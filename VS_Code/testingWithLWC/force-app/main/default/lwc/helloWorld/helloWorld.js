import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullName = {firstName:"", lastName:""};

    getInputs(event){
        const field = event.target.name;
        if(field==='firstName'){
            this.fullName.firstName = event.target.value;
        }else if(field==='lastName'){
            this.fullName.lastName = event.target.value;
        }
    }

}