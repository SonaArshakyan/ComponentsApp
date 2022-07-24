import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing.module';

@NgModule({
  declarations: [  LoginComponent],
  imports: [SharedModule, FormsModule,LoginRoutingModule],
  providers: [],
  exports:[LoginComponent]
})
export class LoginModule { }
