import { Component, ViewEncapsulation,ViewChild ,ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})

export class LoginComponent {
  constructor(private authService: AuthService){}
  submitted=false;
  formModel: FormModel = new FormModel();
    LoginUser(formModel :FormModel) {
      this.authService.login(formModel.email , formModel.password)
      this.submitted = true;    }  
}
  class FormModel {
  email: string ='';
  password:string='';
 }