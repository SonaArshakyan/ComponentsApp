import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [  LoginComponent],
  imports: [SharedModule],
  providers: [],
  exports:[LoginComponent]
})
export class LoginModule { }
