import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Buyer } from '../shared/models/Buyer';

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
      expect(data).toBe({ "buyerId": 1, "buyerName": "nusrath", "password": "anjum15", "phoneNumber": "7259258255" })
    });
  });

  it('should update buyer detail', () => {
    let buyer: Buyer = new Buyer();
    buyer.buyerId = 1;
    buyer.buyerName = "anjum";
    buyer.password = "anjum15";
    buyer.phoneNumber = "1234567892";
    service.updateBuyer(buyer).subscribe(data => {
      expect(data).toBe({ "buyerId": 1, "buyerName": "anjum", "password": "anjum15", "phoneNumber": "1234567892" })
    });
  })

  it('should get transaction', () => {
    const test = 2;
    service.getTransaction(test).subscribe(data => {
      expect(data.length).toEqual(1)
    });
  })


});

