import { Injectable } from '@angular/core';
import { Observable, of, map, throwError , BehaviorSubject, Subscription } from 'rxjs';
import { SessionStorage } from './session-storage.service';
import { TokenService } from './token-service';


@Injectable({ providedIn: 'root'})
export class AuthService {
    private isAuthorized$$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public readonly isAuthorized$: Observable<boolean> = this.isAuthorized$$.asObservable();

    constructor(
    private sessionStorageService: SessionStorage,
    private tokenService: TokenService
    ) {}

   login(email: string, password: string) : void {    
    const accessToken = this.tokenService.generateToken(email, password);

    this.sessionStorageService.setToken(accessToken);
   } 
 
   logout() : void  {
   this.sessionStorageService.deleteToken();
  }  
   
  register(email: string, password: string , name: string) : void  {
    const accessToken = this.tokenService.generateToken(email, password);
    this.sessionStorageService.setToken(accessToken);

   }
   
   isUserAuthorized() : boolean  {
    return (this.sessionStorageService.getToken()) ? true : false;
   }
}
