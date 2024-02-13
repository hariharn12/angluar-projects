import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css',
})
export class FormbuilderComponent {

  forms: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forms = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      name: ['',[Validators.required,Validators.maxLength(7)]],
      password: ['',[Validators.required,Validators.minLength(7),Validators.pattern('[a-z]+')]],
      dob: [''],
      address:this.fb.array([
      ]),
    });
  }
  handleSubmit() {
    console.log(this.forms.value);
  }



 
  // getaddress() {
  //   return this.forms.get('address') as FormArray;
  // }
  // addbutton() {
  //   this.getaddress().push(new FormControl('address'));
  // }

  // removebtn(index: number) {
  //   this.getaddress().removeAt(index);
  // }
  

}
  
 
 

