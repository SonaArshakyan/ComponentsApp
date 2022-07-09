import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import 'src/app/shared/components/index';
@NgModule({
  declarations: [ 
  ],
  exports:[ CommonModule,FontAwesomeModule
     ],
  imports: [ CommonModule,FontAwesomeModule
  ],
  providers: [],
})
export class SharedModule { }