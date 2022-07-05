import { Component, ViewEncapsulation } from '@angular/core'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoginComponent {
    MyImageSvg  = 'assets/img/logo.svg';     
}
