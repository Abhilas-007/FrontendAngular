import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FarmerServiceService } from './farmer-service.service';

describe('FarmerServiceService', () => {
  let service: FarmerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(FarmerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
