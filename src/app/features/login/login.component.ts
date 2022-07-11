import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoginComponent {
  submitted=false;
  formModel: FormModel = new FormModel();
    LoginUser(formModel :FormModel) {
      this.submitted = true;
      console.log(formModel)
    }
 }
 export class FormModel {
  email: string ='';
  password:string='';
 }