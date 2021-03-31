import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BuyerAuthGuard } from './buyer-auth.guard';

describe('BuyerAuthGuard', () => {
  let guard: BuyerAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    guard = TestBed.inject(BuyerAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
