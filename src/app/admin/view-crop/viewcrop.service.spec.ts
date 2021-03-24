/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewcropService } from './viewcrop.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Viewcrop', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      providers: [ViewcropService]
    });
  });

  it('should ...', inject([ViewcropService], (service: ViewcropService) => {
    expect(service).toBeTruthy();
  }));
});
