import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FarmerModule } from './farmer/farmer.module';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { DataService } from './clerk/data.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { MatDialogModule } from '@angular/material/dialog';
import { CreditConfirmDialogComponent } from './clerk/credit-confirm-dialog/credit-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [ProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    RouterModule,
    FarmerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatInputModule,
    MatDialogModule,
    SharedModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [CreditConfirmDialogComponent]
})
export class AppModule { }

