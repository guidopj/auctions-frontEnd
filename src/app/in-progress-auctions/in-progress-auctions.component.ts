import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-in-progress-auctions',
  templateUrl: './in-progress-auctions.component.html',
  styleUrls: ['./in-progress-auctions.component.css']
})
export class InProgressAuctionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inProgressAuctions() {
    return [
      {name: "John", age: 31, city: "New York"},
      {name: "pepe", age: 30, city: "New York"},
      {name: "Eva", age: 29, city: "New York"}
    ]


  }

}
