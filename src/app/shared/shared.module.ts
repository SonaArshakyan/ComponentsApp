import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { SearchComponent } from './components/index';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ EmailValidatorDirective , SearchComponent
  ],
  exports:[ CommonModule,FontAwesomeModule , EmailValidatorDirective , SearchComponent
     ],
  imports: [ CommonModule,FontAwesomeModule, FormsModule
  ],
  providers: [],
})
export class SharedModule { }