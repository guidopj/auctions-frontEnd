import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthMenuComponent } from './auth-menu/auth-menu.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuctionCreationComponent } from './auction-creation/auction-creation.component';
import { GuestMenuComponent } from './guest-menu/guest-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    AuthMenuComponent,
    LoginComponent,
    AuctionCreationComponent,
    GuestMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
