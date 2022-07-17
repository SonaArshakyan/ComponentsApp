import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { CanDeactivateGuard } from './shared/services/can-deactivate-guard';

const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'courses',  component: CoursesComponent},
    { path: 'login', component: LoginComponent,   canDeactivate: [CanDeactivateGuard]},
    { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
    { path: 'registration', component: RegistrationComponent },
    { path: 'registration', loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule) },
    { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }