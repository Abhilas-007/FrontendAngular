import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FarmerServiceService } from './farmer-service.service';

describe('FarmerServiceService', () => {
  let service: FarmerServiceService;
  let httpTestCtrl: HttpTestingController;
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
  it('should test HttpClient get', () => {
    const testGet = 1;
    service.getFarmer(testGet).subscribe(data => {
      expect(data).toBe({"farmerName":"robin","bankName":"SBI", "accountNumber":"55159521645","ifsc":"SBIN0001561","aadharNumber":"259891957247",
    "password":"v","mobileNumber":"8546121045","securityQuestion":"cityName","answer":"pune","farmerId":1});
    });
  });


  
  it('should test HttpClient get', () => {
    const testGet = 1;
    service.getTransactions().subscribe(data => {
      expect(data).toBe({"farmerName":"robin","bankName":"SBI", "accountNumber":"55159521645","ifsc":"SBIN0001561","aadharNumber":"259891957247",
    "password":"v","mobileNumber":"8546121045","securityQuestion":"cityName","answer":"pune","farmerId":1});
    });
  }); 

});
