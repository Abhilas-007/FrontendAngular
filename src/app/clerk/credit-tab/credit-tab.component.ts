import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClerkTransactionService } from '../clerkTransaction.service';
import { DialogService } from '../dialogService.service';
import { debounceTime, tap } from 'rxjs/operators';
import { ExtraCredit } from 'src/app/shared/models/ExtraCredit';

@Component({
  selector: 'app-credit-tab',
  templateUrl: './credit-tab.component.html',
  styleUrls: ['./credit-tab.component.scss']
})

export class CreditTabComponent implements OnInit {

  creditForm: FormGroup;
  extraCreditObj: ExtraCredit = new ExtraCredit();

  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    private clerkTransService: ClerkTransactionService
  ) { }

  ngOnInit(): void {
    this.creditForm = this.fb.group({
      'transId': ['', [Validators.required, Validators.min(1)]],
      'cropClass': ['', [Validators.required, Validators.pattern("[A-B]")]]
    });

    this.checkTransId();
  }

  onSubmit() {
    this.dialogService.openConfirmDialog('Are you sure you want to continue?')
      .afterClosed().subscribe(res => {
        if (res) {
          console.log("PASS");
          this.extraCreditObj.transactionId = this.creditForm.controls['transId'].value;
          this.extraCreditObj.cropClass = this.creditForm.controls['cropClass'].value;
          this.clerkTransService.creditExtraAmount(this.extraCreditObj)
            .subscribe(data => {
              if (data == true) {
                alert("Amount credited successfully!!");
                this.creditForm.reset();
              }
              else {
                alert("Error in crediting amount. Please try again.");
                this.creditForm.reset();
              }
            },
              error => {
                alert("Error in finding crop quality price.");
                this.creditForm.reset();
              }
            );
        }
        else {
          this.creditForm.reset();
        }
      });
  }

  get transId() {
    return this.creditForm.get('transId') as FormControl;
  }

  checkTransId() {
    this.transId.valueChanges.pipe(
      debounceTime(500),
      tap(transId => {
        if (transId !== '' && !this.transId.invalid) {
          this.transId.markAsPending();
        }
        else {
          this.transId.setErrors({ 'invalid': true });
        }
      })
    )
      .subscribe(data => {
        this.clerkTransService.checkForTransactionId(data)
          .subscribe(res => {
            if (res == false) {
              this.transId.markAsPending({ onlySelf: false });
              this.transId.setErrors({ notUnique: true });
            }
            else {
              this.transId.markAsPending({ onlySelf: false });
              this.transId.setErrors(null);
            }
          }
          )
      }
      )
  }
}
