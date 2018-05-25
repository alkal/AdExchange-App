import { Component, OnInit } from '@angular/core';
import { BidderApiService } from '../../services/bidder-api.service';

@Component({
  selector: 'bidders-list',
  templateUrl: './bidders-list.component.html',
  styleUrls: ['./bidders-list.component.css']
})
export class BiddersListComponent implements OnInit {
  
  bidderList:any[];
  bidderState:any[]=[];
  errorMessage:string;

  constructor(private service:BidderApiService) {
    this.service.getBidderList()
      .subscribe(
        response=>{
          this.bidderList=response.json();
          for(let i=0;i<this.bidderList.length;i++){
            if((this.bidderState.includes(this.bidderList[i]['state']))) continue;
            else{
              this.bidderState.push(this.bidderList[i]['state']);
            }
          }
        },
        error=>{
          return this.errorMessageFn(error.status);
        }

      );
  }

  ngOnInit() {
    
  }
  
  getBidders(state: string){
    return this.bidderList.filter(bidder => bidder.state === state);
  }

  errorMessageFn(errorStatus){
    if(errorStatus===404){
      this.errorMessage="Bidders list could not be retrieved.";
    }else{
      this.errorMessage="An unexpected error occured.";
    }
  }

}
