import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoginComponent {
  email = '';
  password ='';
  LoginUser(form: NgForm) {
    console.log(form.value); }
 }
