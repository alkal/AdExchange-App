import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geos',
  templateUrl: './geos.component.html',
  styleUrls: ['./geos.component.css']
})
export class GeosComponent implements OnInit {

  locations=["USA","ABW","GRE","AIA"];
  searchItems:any[];
  

  constructor() {
    this.searchItems=this.locations;
  }

  ngOnInit() {
  }

  addNewLocation(location){

  }

  searchLocation(searchValue){
    this.searchItems=this.locations.filter(locVal=> locVal.includes(searchValue));
  }

}
