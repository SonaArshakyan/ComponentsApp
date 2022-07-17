import { Inject, Injectable}  from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Injectable()
export class SessionStorage {
    constructor(@Inject('Window') private window: any) {} 

  setToken(token: string) {
    sessionStorage.setItem('token', token );
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  deleteToken() {
    sessionStorage.removeItem('token');
  }
}
