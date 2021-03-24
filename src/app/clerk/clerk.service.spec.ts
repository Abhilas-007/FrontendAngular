import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ClerkService } from './clerk.service';

describe('ClerkService', () => {
  let service: ClerkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(ClerkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
