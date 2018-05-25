import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BidderApiService {

  private url= "http://private-anon-ffa49df9ae-biddermanagement.apiary-mock.com/bidders";
  
  constructor(private http:Http) {}

  getBidderList(){
    return this.http.get(this.url);
  }

  getBidderId(id){
    return this.http.get(this.url+`/${id}`);
  }

  updateBidder(bidderId,post){
    return this.http.put(this.url+`/${bidderId}`, post);
  }
}
