/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestServiceService } from './requestService.service';

describe('Service: RequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestServiceService],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    });
  });

  it('should ...', inject([RequestServiceService], (service: RequestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
