import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetAuctionsService {

  constructor(private http:HttpClient) { }

  getAuctions(){
    this.http.get().subscribe(data =>{
      console.log("datos " + data);
    })
  }
}
