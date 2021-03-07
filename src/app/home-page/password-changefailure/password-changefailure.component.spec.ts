import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangefailureComponent } from './password-changefailure.component';

describe('PasswordChangefailureComponent', () => {
  let component: PasswordChangefailureComponent;
  let fixture: ComponentFixture<PasswordChangefailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordChangefailureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangefailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
