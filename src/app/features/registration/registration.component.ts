import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { validEmailvalidator } from 'src/app/shared/validators/valid-email-validator';

@Component({
    selector: 'app-registr',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  submitted = false;
    registrForm = new FormGroup({
        Name: new FormControl('',[Validators.required,Validators.minLength(6)]) ,
        Email: new FormControl('', [Validators.required, validEmailvalidator()]),
        Password: new FormControl('',Validators.required),
      });
      RegistrUser(){
        this.submitted = true;
      }
      get registrFormControls(): any {
        return this.registrForm['controls'];
     }
}