import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FarmerAuthGuard } from './farmer-auth.guard';

describe('FarmerAuthGuard', () => {
  let guard: FarmerAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    guard = TestBed.inject(FarmerAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
