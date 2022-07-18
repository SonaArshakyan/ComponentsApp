import { Injectable }  from '@angular/core';
import { Observable, of, map, throwError , BehaviorSubject, Subscription } from 'rxjs';
import { ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree, CanActivate, Router }  from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root'})
export class NotAuthorizedGuard implements CanActivate {

constructor(private authService: AuthService, private router: Router)
{}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ( boolean | UrlTree )
    {
        return this.authService.isUserAuthorized() ? this.router.createUrlTree(['/courses']) : true;
    } 
}