/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DialogService } from './dialog.service';
import {MatDialog} from '@angular/material/dialog';

describe('Service: Dialog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogService,
        {
          provide: MatDialog,
          useValue: {}
        }
      ]
    });
  });

  it('should ...', inject([DialogService], (service: DialogService) => {
    expect(service).toBeTruthy();
  }));
});
