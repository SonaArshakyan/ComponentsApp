import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs';
import { CanDeactivate,ActivatedRouteSnapshot,RouterStateSnapshot }  from '@angular/router';
import { LoginComponent} from '../../features/login/login.component';

@Injectable({ providedIn: 'root' })
export class CanDeactivateGuard implements CanDeactivate<LoginComponent> {

  canDeactivate(
    component: LoginComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (component.formModel.email != '' && component.formModel.password !=''  && component.formModel.password.length == 4)
    {
      return true;
    }    
    return false;
  }
}