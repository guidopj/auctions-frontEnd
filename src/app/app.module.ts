import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthMenuComponent } from './auth-menu/auth-menu.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuctionCreationComponent } from './auction-creation/auction-creation.component';
import { GuestMenuComponent } from './guest-menu/guest-menu.component';
import {AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from 'angular-6-social-login';
import { InProgressAuctionsComponent } from './in-progress-auctions/in-progress-auctions.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LogoutComponent } from './logout/logout.component';
import { AuctionSearchComponent } from './auction-search/auction-search.component';
import {RouterModule} from '@angular/router';

// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("98767924721-a7brie8thht3umitqf47hg18fv2joqvp.apps.googleusercontent.com")
      }
    ]
  );
  return config;
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    AuthMenuComponent,
    LoginComponent,
    AuctionCreationComponent,
    GuestMenuComponent,
    InProgressAuctionsComponent,
    HomeComponent,
    LogoutComponent,
    AuctionSearchComponent,

  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
