import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router"

import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-guest-menu',
  templateUrl: './guest-menu.component.html',
  styleUrls: ['./guest-menu.component.css']
})
export class GuestMenuComponent implements OnInit {

  @Input() isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  @Output() changeProps: EventEmitter<string> = new EventEmitter<string>();

  constructor(private socialAuthService: AuthService,private router: Router) {
  }

  ngOnInit() {
    console.log("init de guest " + this.isLoggedIn);
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform + " sign in data : ", userData);
          this.changeProps.emit(userData.email);
          this.router.navigate(['/home']);
        }
      );
    }
  }
}
