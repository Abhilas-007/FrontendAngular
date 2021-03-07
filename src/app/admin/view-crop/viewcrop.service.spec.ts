/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewcropService } from './viewcrop.service';

describe('Service: Viewcrop', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewcropService]
    });
  });

  it('should ...', inject([ViewcropService], (service: ViewcropService) => {
    expect(service).toBeTruthy();
  }));
});
