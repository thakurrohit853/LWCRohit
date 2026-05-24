import { LightningElement } from 'lwc';

export default class BasicCalculator extends LightningElement {

    firstInput;
    secondInput;
    totalValue; 
    showResult;
    firstInputChange(event){
        this.firstInput =  event.target.value;   
    } 
    secondInputChange(event){
        this.secondInput = event.target.value;
    }  
    add(event){
        this.totalValue = Number(this.firstInput) + Number(this.secondInput); 
        ths.showResult = true;
    }
    subtract(event){
        this.totalValue = Number(this.firstInput) - Number(this.secondInput); 
        ths.showResult = true;
    }
    multipication(event){
        this.totalValue = Number(this.firstInput) * Number(this.secondInput); 
        ths.showResult = true;
    }
    div(event){
        this.totalValue = Number(this.firstInput) / Number(this.secondInput); 
        ths.showResult = true;
    }
}

