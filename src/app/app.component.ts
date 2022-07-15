import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoursesApp';
  UserName = "Sona";
  IsUserloggedin = false;
  courseBtnParentTitle = 'Show course';
  MyImageSvg  = 'assets/img/logo.svg';
}
