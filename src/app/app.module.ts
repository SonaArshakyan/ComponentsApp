import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './features/login/login.module';
import { CoursesModule } from './features/courses/courses.module'; 
import { RegistrationModule } from './features/registration/registration.module';
import {AuthModule} from '../app/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store/Index';
import { AuthorModule } from './store/authors/authors.module';
@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserModule,SharedModule ,CoursesModule, LoginModule, RegistrationModule,AuthModule ,AppRoutingModule, 
    [StoreModule.forRoot(reducers), AuthorModule], EffectsModule.forRoot([effects])],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
