import { TestBed } from '@angular/core/testing';

import { BetfairapiService } from './betfairapi.service';

describe('BetfairapiService', () => {
  let service: BetfairapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetfairapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
