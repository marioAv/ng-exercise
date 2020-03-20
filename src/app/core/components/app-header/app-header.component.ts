import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user: User = {
    first_name: 'Ahsan',
    last_name: 'Ayaz',
    email: 'ahsan.mail.com',
    avatar : ''
  };

  constructor(
    public loginService:LoginService
  ) { }


  ngOnInit() {
    this.loginService.isLoggedIn = false;
  }

  login(){
    this.loginService.login();
  }

  logout(){
    this.loginService.logout();
  }

  signup() {
    this.loginService.signup();
  }

}
