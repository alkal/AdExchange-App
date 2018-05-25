import { BidderApiService } from './../../services/bidder-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bidder',
  templateUrl: './bidder.component.html',
  styleUrls: ['./bidder.component.css']
})
export class BidderComponent implements OnInit {

  bidderItem=[];
  bidderTitle:string;
  errorMessage:string;

  constructor(private route:ActivatedRoute, private service:BidderApiService) {
      this.route.paramMap
        .subscribe(params=>{
          this.service.getBidderId(params.get('id'))
            .subscribe(
              response=>{
                this.bidderItem=response.json();
                this.bidderTitle=this.bidderItem['name'];
              },
              error=>{
                return this.errorMessageFn(error.status);
              }
            );
        });
   }

  ngOnInit() {
  }

  updateBidder(id,post){
    this.service.updateBidder(id,post)
    .subscribe(
      response=>{
        this.bidderItem=response.json();
      },
      error=>{
        return this.errorMessageFn(error.status);
      }
    );
  }

  errorMessageFn(errorStatus){
    if(errorStatus===404){
      this.errorMessage="Bidder details could not be retrieved.";
    }else{
      this.errorMessage="An unexpected error occured.";
    }
  }


}
