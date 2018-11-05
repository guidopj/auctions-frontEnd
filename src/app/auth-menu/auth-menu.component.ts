import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent implements OnInit {
  @Input() userEmail:string;

  constructor() {
    console.log("email " + this.userEmail);
  }

  ngOnInit() {
  }

}
