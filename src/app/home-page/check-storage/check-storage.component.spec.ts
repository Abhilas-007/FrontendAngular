import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStorageComponent } from './check-storage.component';

describe('CheckStorageComponent', () => {
  let component: CheckStorageComponent;
  let fixture: ComponentFixture<CheckStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
