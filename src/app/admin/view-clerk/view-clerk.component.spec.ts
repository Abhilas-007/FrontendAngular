import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClerkComponent } from './view-clerk.component';

describe('ViewClerkComponent', () => {
  let component: ViewClerkComponent;
  let fixture: ComponentFixture<ViewClerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClerkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
