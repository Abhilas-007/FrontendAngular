import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BuyerServiceService } from './buyer-service.service';

describe('BuyerServiceService', () => {
  let service: BuyerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(BuyerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
