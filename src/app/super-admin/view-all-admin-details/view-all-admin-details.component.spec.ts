import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAdminDetailsComponent } from './view-all-admin-details.component';

describe('ViewAllAdminDetailsComponent', () => {
  let component: ViewAllAdminDetailsComponent;
  let fixture: ComponentFixture<ViewAllAdminDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllAdminDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllAdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
