import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent  {

  form =new FormGroup({
    username:new FormControl(
      '',[Validators.required,
    Validators.minLength(3),
   UsernameValidators.cannotContainSpace]),

   password:new FormControl('',Validators.required)
  })

  get username(){
    return this.form.get('username');

  }
  get password(){
    return this.form.get('password');
    
  }
}
