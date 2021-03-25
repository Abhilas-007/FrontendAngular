/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BuyerService } from './buyer.service';

describe('Service: Buyer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyerService],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    });
  });

  it('should ...', inject([BuyerService], (service: BuyerService) => {
    expect(service).toBeTruthy();
  }));
});
