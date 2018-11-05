import { Component, OnInit } from '@angular/core';
import {AuthService} from 'angular-6-social-login';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private socialAuthService: AuthService) { }

  socialSignOut(){
    localStorage.setItem("isLoggedIn","false");
  }

  ngOnInit() {
    this.socialSignOut();
  }


}
