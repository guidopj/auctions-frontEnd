import { TestBed, inject } from '@angular/core/testing';

import { GetAuctionsService } from './get-auctions.service';

describe('GetAuctionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAuctionsService]
    });
  });

  it('should be created', inject([GetAuctionsService], (service: GetAuctionsService) => {
    expect(service).toBeTruthy();
  }));
});
