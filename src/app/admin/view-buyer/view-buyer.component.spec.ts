import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuyerComponent } from './view-buyer.component';

describe('ViewBuyerComponent', () => {
  let component: ViewBuyerComponent;
  let fixture: ComponentFixture<ViewBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
