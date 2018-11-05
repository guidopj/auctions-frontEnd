import {Component, Input, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'auctions';
  @Input() userEmail:string;
  isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  constructor() {
    localStorage.setItem("isLoggedIn","false");
  }

  changeProps(email){
    localStorage.setItem("isLoggedIn","true");
    console.log("logged de guest " + localStorage.getItem("isLoggedIn"));
    this.userEmail = email;
  }
}
