import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from '../features/login/login.module';
import { CoursesModule } from '../features/courses/courses.module'; 

@NgModule({
  declarations: [ 
  ],
  exports:[ CommonModule,FontAwesomeModule, LoginModule, CoursesModule
     ],
  imports: [ CommonModule,FontAwesomeModule, LoginModule, CoursesModule
  ],
  providers: [],
})
export class SharedModule { }