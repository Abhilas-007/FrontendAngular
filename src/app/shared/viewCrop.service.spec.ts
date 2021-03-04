/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewCropService } from './viewCrop.service';

describe('Service: ViewCrop', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewCropService]
    });
  });

  it('should ...', inject([ViewCropService], (service: ViewCropService) => {
    expect(service).toBeTruthy();
  }));
});
