import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import 'src/app/shared/components/index';
import { EmailValidatorDirective } from './directives/email-validator.direvtive';

@NgModule({
  declarations: [ 
  ],
  exports:[ CommonModule,FontAwesomeModule
     ],
  imports: [ CommonModule,FontAwesomeModule
  ],
  providers: [EmailValidatorDirective],
})
export class SharedModule { }