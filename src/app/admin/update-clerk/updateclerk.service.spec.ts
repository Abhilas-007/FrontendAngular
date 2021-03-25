/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdateclerkService } from './updateclerk.service';

describe('Service: Updateclerk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateclerkService],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    });
  });

  it('should ...', inject([UpdateclerkService], (service: UpdateclerkService) => {
    expect(service).toBeTruthy();
  }));
});
