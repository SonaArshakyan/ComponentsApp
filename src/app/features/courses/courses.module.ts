import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesRoutingModule } from './courses.routing.module';
@NgModule({
  declarations: [ CoursesComponent],
  imports:[SharedModule,CoursesRoutingModule],
  providers: [],
  exports:[CoursesComponent]
})
export class CoursesModule { }
