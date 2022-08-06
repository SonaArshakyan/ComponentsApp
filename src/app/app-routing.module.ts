import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full'},
    { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
    { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },
    { path: 'registration', loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }