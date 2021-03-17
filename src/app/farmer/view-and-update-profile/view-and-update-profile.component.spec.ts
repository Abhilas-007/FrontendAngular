import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAndUpdateProfileComponent } from './view-and-update-profile.component';

describe('ViewAndUpdateProfileComponent', () => {
  let component: ViewAndUpdateProfileComponent;
  let fixture: ComponentFixture<ViewAndUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAndUpdateProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAndUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
