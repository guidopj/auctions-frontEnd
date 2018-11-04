import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

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

  @Input() isLoggedIn:boolean;
  @Output() changeProps: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private socialAuthService: AuthService) {
  }

  ngOnInit() {
    console.log(this.isLoggedIn);
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform + " sign in data : ", userData);
          this.isLoggedIn = true;
          this.changeProps.emit(this.isLoggedIn);
        }
      );
    }
  }
}
