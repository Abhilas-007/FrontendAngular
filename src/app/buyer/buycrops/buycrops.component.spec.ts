import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {MatDialog} from '@angular/material/dialog';
import { BuycropsComponent } from './buycrops.component';

describe('BuycropsComponent', () => {
  let component: BuycropsComponent;
  let fixture: ComponentFixture<BuycropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule 
      ],
      providers: [
        {
          provide: MatDialog,
          useValue: {}
        }
      ],
      declarations: [ BuycropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute ngOnInit()', () => {
    expect(component.ngOnInit()).toBe();
  });

  it('should create', () => {
    expect(component.getDetails()).toBe();
  });

  it('should create', () => {
    expect(component.onMandiSearch()).toBe();
  });

  it('should create', () => {
    expect(component.onSubmit()).toBe();
  });

});
