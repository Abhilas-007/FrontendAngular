import { TestBed } from '@angular/core/testing';

import { LogoutService } from './logout.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LogoutService', () => {
  let service: LogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    });
    service = TestBed.inject(LogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
