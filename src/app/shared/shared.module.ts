import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { SearchComponent } from './components/index';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ EmailValidatorDirective , SearchComponent
  ],
  exports:[ CommonModule,FontAwesomeModule , EmailValidatorDirective , SearchComponent,AppRoutingModule
     ],
  imports: [ CommonModule,FontAwesomeModule, FormsModule, AppRoutingModule
  ],
  providers: [],
})
export class SharedModule { }