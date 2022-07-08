import { NgModule  } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ CoursesComponent],
  imports:[CommonModule],
  providers: [],
  exports:[CoursesComponent]
})
export class CoursesModule { }
