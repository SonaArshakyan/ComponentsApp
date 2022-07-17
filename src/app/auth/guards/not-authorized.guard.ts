import { Injectable }  from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree, CanActivate, Router }  from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class NotAuthorizedGuard implements CanActivate {

constructor(private authService: AuthService, private router: Router)
{}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ( boolean | UrlTree )
    {
    if(this.authService.isUserAuthorized())
        return true;
    else{
            return this.router.createUrlTree(['/courses']);
        } 
   } 
}