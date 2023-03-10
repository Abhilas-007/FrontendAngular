import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CheckStorageService } from './check-storage.service';

describe('CheckStorageService', () => {
  let service: CheckStorageService;

  map:new Map<string, string>();
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    });
    service = TestBed.inject(CheckStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});

