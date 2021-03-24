/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BuycropsService } from './Buycrops.service';

describe('Service: Buycrops', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      providers: [BuycropsService]
    });
  });

  it('should ...', inject([BuycropsService], (service: BuycropsService) => {
    expect(service).toBeTruthy();
  }));
});
