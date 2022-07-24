import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedGuard } from 'src/app/auth/guards/authorized.guard';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '', component: CoursesComponent , canLoad : [AuthorizedGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }