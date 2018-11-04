import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'auctions';
  @Input() isLoggedIn;


  setIsLoggedIn(isLogged:boolean){
    this.isLoggedIn = isLogged;
  }

  changeProps(bool){
    this.isLoggedIn = bool;
  }
}
