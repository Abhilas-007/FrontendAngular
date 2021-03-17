/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuycropsService } from './Buycrops.service';

describe('Service: Buycrops', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuycropsService]
    });
  });

  it('should ...', inject([BuycropsService], (service: BuycropsService) => {
    expect(service).toBeTruthy();
  }));
});
