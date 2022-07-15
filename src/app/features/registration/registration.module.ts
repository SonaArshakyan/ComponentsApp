import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {RegistrationComponent} from './registration.component'

@NgModule({
  declarations: [ RegistrationComponent ],
  imports: [SharedModule, ReactiveFormsModule],
  providers: [],
  exports:[ RegistrationComponent]
})
export class RegistrationModule { }
