import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspTabComponent } from './msp-tab.component';

describe('MspTabComponent', () => {
  let component: MspTabComponent;
  let fixture: ComponentFixture<MspTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
