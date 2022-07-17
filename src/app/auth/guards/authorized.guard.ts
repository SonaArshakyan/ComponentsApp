import { Injectable }  from '@angular/core';
import {Router, CanLoad, Route, UrlSegment, UrlTree }  from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthorizedGuard implements CanLoad {
    constructor(private authService: AuthService, private router: Router)
    {}

  canLoad(route: Route, segments: UrlSegment[]): (boolean | UrlTree)
  {
    if(this.authService.isUserAuthorized())
        return true;
    else{
            return this.router.createUrlTree(['/login']);
        } 
   }  
}