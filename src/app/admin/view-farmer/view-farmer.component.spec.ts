import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewFarmerComponent } from './view-farmer.component';

describe('ViewFarmerComponent', () => {
  let component: ViewFarmerComponent;
  let fixture: ComponentFixture<ViewFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [ ViewFarmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component.ngOnInit()).toBe();
  });

  it('should create', () => {
    expect(component.getFarmers()).toBe();
  });

  it('should create', () => {
    expect(component.onMandiPincodeSearch()).toBe();
  });

  // it(`should get the farmers`, waitForAsync( () => {
  //   expect(component.getFarmers.length).toBeDefined();
  // }
  // ));
});
