/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewClerkService } from './viewClerk.service';

describe('Service: ViewClerk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewClerkService],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    });
  });

  it('should ...', inject([ViewClerkService], (service: ViewClerkService) => {
    expect(service).toBeTruthy();
  }));
});
