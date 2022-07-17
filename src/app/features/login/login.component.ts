import { Component, ViewEncapsulation,ViewChild ,ElementRef } from '@angular/core';
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
      this.submitted = true;    }  
}
  class FormModel {
  email: string ='';
  password:string='';
 }