import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { map } from 'rxjs/operators';

import { CheckStorageComponent } from './check-storage.component';

describe('CheckStorageComponent', () => {
  let component: CheckStorageComponent;
  let fixture: ComponentFixture<CheckStorageComponent>;

  let service:CheckStorageComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
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

  it('should return mandies',()=>{
    
    expect( component.mandies.length).toEqual(0);
  });
});
