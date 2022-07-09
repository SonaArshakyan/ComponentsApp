import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './features/login/login.module';
import { CoursesModule } from './features/courses/courses.module'; 

@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserModule, SharedModule ,CoursesModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
