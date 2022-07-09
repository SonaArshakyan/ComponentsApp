import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ CoursesComponent],
  imports:[SharedModule],
  providers: [],
  exports:[CoursesComponent]
})
export class CoursesModule { }
