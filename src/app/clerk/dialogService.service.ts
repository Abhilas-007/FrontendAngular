import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog"
import { CreditConfirmDialogComponent } from "./credit-confirm-dialog/credit-confirm-dialog.component";

@Injectable({
    providedIn: 'root'
})

export class DialogService
{
    constructor(private dialog: MatDialog) {}

    openConfirmDialog(msg)
    {
        return this.dialog.open(CreditConfirmDialogComponent, {
            width: '390px',
            panelClass: 'confirm-dialog-container',
            disableClose: true,
            data: {
                message: msg
            }
        }); 
    }
}