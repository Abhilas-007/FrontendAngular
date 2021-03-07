/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewClerkService } from './viewClerk.service';

describe('Service: ViewClerk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewClerkService]
    });
  });

  it('should ...', inject([ViewClerkService], (service: ViewClerkService) => {
    expect(service).toBeTruthy();
  }));
});
