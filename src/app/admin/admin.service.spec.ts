import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Crop } from '../shared/models/Crop';
describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should get msp', () => {

    service.getMSP('22', 'wheat').subscribe(data => {
      expect(data).toBe({ "cropName": "wheat", "cropMSP": 11, "adminId": "22" })
    });
  });

  it('should update crop detail', () => {
    let crop: Crop = new Crop();

    crop.adminId = "22";
    crop.cropMSP = 22;
    crop.cropName = "wheat"

    service.updateMSP(crop).subscribe(data => {
      expect(data).toBe({ "cropName": "wheat", "cropMSP": 22, "adminId": "22" })
    });
  });
})