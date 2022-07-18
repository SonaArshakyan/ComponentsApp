import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { CanDeactivateGuard } from './shared/services/can-deactivate-guard';

const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full'},
    { path: 'courses',  component: CoursesComponent , canLoad : [AuthorizedGuard] ,loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },
    { path: 'login', component: LoginComponent, canActivate:[NotAuthorizedGuard]},
    { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
    { path: 'registration', component: RegistrationComponent,canActivate:[NotAuthorizedGuard] },
    { path: 'registration', loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }