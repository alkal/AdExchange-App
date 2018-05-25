import { TestBed, inject } from '@angular/core/testing';

import { BidderApiService } from './bidder-api.service';

describe('BidderApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BidderApiService]
    });
  });

  it('should be created', inject([BidderApiService], (service: BidderApiService) => {
    expect(service).toBeTruthy();
  }));
});
