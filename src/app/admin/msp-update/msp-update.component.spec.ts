import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspUpdateComponent } from './msp-update.component';

describe('MspUpdateComponent', () => {
  let component: MspUpdateComponent;
  let fixture: ComponentFixture<MspUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
