import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [  LoginComponent],
  imports: [SharedModule, FormsModule],
  providers: [],
  exports:[LoginComponent]
})
export class LoginModule { }
