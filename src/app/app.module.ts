import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BidderApiService } from './services/bidder-api.service';
import { BiddersListComponent } from './components/bidders-list/bidders-list.component';
import { BidderComponent } from './components/bidder/bidder.component';
import { GeosComponent } from './components/geos/geos.component';

@NgModule({
  declarations: [
    AppComponent,
    BiddersListComponent,
    BidderComponent,
    GeosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'home',
        component:BiddersListComponent
      },
      {
        path:'view-bidder/:bidderId',
        component:BidderComponent
      },
      {
        path:'biddersList',
        component:BiddersListComponent
      },
      {
        path:'**',
        redirectTo: '/home', 
        pathMatch: 'full'
      },
      { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
      }
    ])
  ],
  providers: [
    BidderApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
