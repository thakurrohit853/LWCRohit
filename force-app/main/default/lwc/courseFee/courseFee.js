import { LightningElement, track } from 'lwc';

export default class CourseFee extends LightningElement {  courseName='salesforce Lightning Web component';
/* Important Note
As per latest release , all primitive private property are reactive now.
only we have to use @track for below :
               Object created with {} and decorated with @track are reactive.
                 Arrays created with [] and decorated with @track are reactive.
You can refer next session if want to learn more about @track but this will be no more valid for all property as per latest release. 
But go through once only to have knowledge of how it was using previously.*/
    courseFee ='200';

    numberOfStudents ='10';

    @track totalCourseFee='200';

    changeCourseFee(event){

        this.courseFee = event.target.value;

        //this.calculateTotal();

    }

    changeNoOfStud(event){

        this.numberOfStudents = event.target.value;

        //this.calculateTotal();

    }

    calculateTotal(){

        this.totalCourseFee = parseFloat(this.courseFee)*parseFloat(this.numberOfStudents);

       

    }

    get totalAmount(){

        if(this.totalCourseFee ==='undefined'){

            return '';

        }

        return this.totalCourseFee;

    }

}