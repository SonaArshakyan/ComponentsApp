import { NgModule } from '@angular/core';
import { LoginComponent } from '../features/login/login.component';
import { CoursesComponent } from '../features/courses/courses.component';
import { CourseComponent } from '../features/courses/course.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CoursesComponent,LoginComponent,CourseComponent
  ],
  exports:[
 CoursesComponent, LoginComponent ,CourseComponent],
  imports: [ CommonModule,FontAwesomeModule
  ],
  providers: [],
})
export class SharedModule { }