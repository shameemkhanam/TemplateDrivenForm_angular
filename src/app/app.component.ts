import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularForms';
  defaultCountry = 'india';
  firstname: string = '';
  lastname: string = '';
  defaultGender = 'Male';

  //to retrieve form data
  fname: string;
  lname: string;
  email: string;
  gen: string;
  country: string;

  //for gender radio button
  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' },
  ];

  // @ViewChild('myform')form: NgForm; //but showing error

  @ViewChild('myform')
  form: NgForm;

  onSubmit() {
    console.log(this.form);
    

    this.fname = this.form.value.personalDetails.firstname;
    this.lname = this.form.value.personalDetails.lastname;
    this.email = this.form.value.personalDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;
    // console.log(this.fname);

    this.form.reset();
  }

  setDefaultValues() {
    // this.form.value.personalDetails.firstname = 'John';
    // this.form.value.personalDetails.lastname = 'Smith';
    // this.form.value.personalDetails.email = 'John@gmail.com';
    //this will set values,but not displaying in the form fields.. so use setValue()method

    //setValue():if we want to set default values for all the form fields -- it is good, but
    //if we don't want to set all form fields then instead of setvalue() we can use patchValue()
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personalDetails: { firstname: 'John', lastname: 'Smith', email: 'John@gmail.com' }
    // });

    //patchValue()
    this.form.form.patchValue({
      personalDetails:{ firstname:'JJ', lastname: 'KK', email: 'Jk@gg.com'}
    });

  }
}
