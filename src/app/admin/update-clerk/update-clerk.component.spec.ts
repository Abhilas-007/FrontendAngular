import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdateClerkComponent } from './update-clerk.component';

describe('UpdateClerkComponent', () => {
  let component: UpdateClerkComponent;
  let fixture: ComponentFixture<UpdateClerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClerkComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
