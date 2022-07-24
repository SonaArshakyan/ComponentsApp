import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotAuthorizedGuard } from 'src/app/auth/guards/not-authorized.guard';

import { LoginComponent } from './login.component';


const routes: Routes = [
  {
     path: '', component: LoginComponent, canActivate:[NotAuthorizedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }