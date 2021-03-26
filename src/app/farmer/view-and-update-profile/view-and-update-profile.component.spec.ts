import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewAndUpdateProfileComponent } from './view-and-update-profile.component';

describe('ViewAndUpdateProfileComponent', () => {
  let component: ViewAndUpdateProfileComponent;
  let fixture: ComponentFixture<ViewAndUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule 
      ],
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

  it('should create', () => {
    expect(component.onSubmit()).toBe();
  });
  it('should create', () => {
    expect(component.onCancel()).toBe();
  });
  it('should create', () => {
    expect(component.getFarmer()).toBe();
  });
  it('should create', () => {
    expect(component.ngOnInit()).toBe();
  });
});
