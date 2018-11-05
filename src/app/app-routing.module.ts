import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterUserComponent }   from './register-user/register-user.component';
import { LoginComponent }      from './login/login.component';

import { AuctionCreationComponent }  from './auction-creation/auction-creation.component';
import { InProgressAuctionsComponent}  from './in-progress-auctions/in-progress-auctions.component';
import {HomeComponent} from './home/home.component';
import {LogoutComponent} from './logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createAuction', component: AuctionCreationComponent },
  { path: 'inProgressAuctions', component: InProgressAuctionsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
