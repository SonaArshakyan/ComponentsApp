import { Inject, Injectable}  from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Injectable({ providedIn: 'root'})
export class SessionStorage {
    constructor() {} 

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
