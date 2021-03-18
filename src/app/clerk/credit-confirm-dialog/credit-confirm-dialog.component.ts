import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-credit-confirm-dialog',
  templateUrl: './credit-confirm-dialog.component.html',
  styleUrls: ['./credit-confirm-dialog.component.scss']
})
export class CreditConfirmDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<CreditConfirmDialogComponent>
    ) { }

  ngOnInit(): void {
  }

  closeDailog()
  {
    this.dialogRef.close(false);
  }

}
