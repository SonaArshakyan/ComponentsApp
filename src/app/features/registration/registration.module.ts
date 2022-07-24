import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {RegistrationComponent} from './registration.component'
import { RegistrationRoutingModule } from './registration.routing.module';
@NgModule({
  declarations: [ RegistrationComponent ],
  imports: [SharedModule, ReactiveFormsModule , RegistrationRoutingModule],
  exports:[ RegistrationComponent]
})
export class RegistrationModule { }
