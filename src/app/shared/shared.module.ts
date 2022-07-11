import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailValidatorDirective } from './directives/email-validator.directive'; 

@NgModule({
  declarations: [ EmailValidatorDirective
  ],
  exports:[ CommonModule,FontAwesomeModule , EmailValidatorDirective
     ],
  imports: [ CommonModule,FontAwesomeModule
  ],
  providers: [],
})
export class SharedModule { }