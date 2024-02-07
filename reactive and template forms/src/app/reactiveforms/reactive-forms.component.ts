import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet,RouterLink],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  // showpasword = false;
  forms = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('[a-z]+'),
    ]),
    dob: new FormControl(''),
    passwordvisbile: new FormControl(''),
    address: new FormArray([new FormControl('address1')]),
  });
  getaddress() {
    return this.forms.get('address') as FormArray;
  }
  addbutton() {
    this.getaddress().push(new FormControl('address'));
  }

  removebtn(index: number) {
    this.getaddress().removeAt(index);
  }

  handleSubmit() {
    console.log(this.forms.value);
    console.log(this.forms.valid);
    if (this.forms.invalid) {
      window.alert('please this form');
    }
  }

  // constructor() {
  //   this.forms.controls.passwordvisbile.valueChanges.subscribe((value) => {
  //     console.log(value);
  //     this.showpasword = value === 'show';
  //   });
  // }
}
