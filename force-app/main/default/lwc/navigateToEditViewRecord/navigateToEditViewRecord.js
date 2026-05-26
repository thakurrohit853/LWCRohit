import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToEditViewRecord extends NavigationMixin(LightningElement) {
    NavigateToView(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0018E00001LCYEkQAP',
                objectApiName:'Account',
                actionName:'view'
            }
           
 
        });
    }
    NavigateToEdit(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0018E00001LCYEkQAP',
                objectApiName:'Account',
                actionName:'edit'
            }
           
 
        });
    }
}