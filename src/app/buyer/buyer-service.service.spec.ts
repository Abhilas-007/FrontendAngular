import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BuyerServiceService } from './buyer-service.service';

describe('BuyerServiceService', () => {
  let service: BuyerServiceService;
  let httpTestCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(BuyerServiceService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test HttpClient get', () => {
    const testGet = 1;
    service.getBuyer(testGet).subscribe(data => {
      expect(data).toBe({"buyerId":1,"buyerName":"nusrath","password":"anjum15","phoneNumber":"7259258255"})
    });
  });
});
