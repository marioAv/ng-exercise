import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  isLoggedIn: boolean = false;

  constructor() { }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  signup(){
    this.isLoggedIn = true ;
  }
}