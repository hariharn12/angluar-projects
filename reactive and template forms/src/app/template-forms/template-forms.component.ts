import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
mydata={
  name:'',
  email:'',
  password:'',
  dob:'',
  address:[{doorno:''}]
}

add(){
this.mydata.address.push({doorno:''})
}
remove(index:any){
  this.mydata.address.splice(index, 1)
}

  handleSubmit(){

  }
}
