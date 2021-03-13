import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClerkCrop } from 'src/app/shared/models/ClerkCrop';
import { CropsToBuy } from 'src/app/shared/models/CropsToBuy';
import { ClerkBuyCropsService } from '../clerkBuyCrops.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buy-crops-tab',
  templateUrl: './buy-crops-tab.component.html',
  styleUrls: ['./buy-crops-tab.component.scss']
})
export class BuyCropsTabComponent implements OnInit {

  FormGroup: FormGroup;
  TotalRow: number;
  farmerId: any = null;
  clerkId: any = null;
  noOfCropTypes: any = null;
  tempCropName: any;
  tempCropQty: any;
  tempAllItems: any[];
  tempCropToBuy: CropsToBuy = { cropName: '', cropQty: 0 };
  cropPattern: RegExp;
  cropNameCheck: boolean = false;
  cropQtyCheck: boolean = false;
  cropItemCheck: boolean = false;
  foundWrongItem: boolean = false;
  requiredStorage: number;
  availableStorage: number;

  clerkcrops: ClerkCrop[] = [{ farmerId: 0, clerkId: '', cropName: '', cropQty: 0 }];

  staticSubmit: boolean = false; //to decide when to show the dynamic form
  dynamicSubmit: boolean = true; //to disable/able the "Submit" button
  disableAddCropDetails: boolean = false; //to disable/able the "Add Crop Details" button
  allCropsEntered: boolean = true; //to check if all crops are entered

  constructor(private _fb: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private clerkService: ClerkBuyCropsService
  ) { }

  ngOnInit(): void {
    this.requiredStorage = 0;
    this.clerkId = "1";
    this.TotalRow = 1;
    this.FormGroup = this._fb.group({
      itemRows: this._fb.array([this.initItemRow()]),
    });
  }

  initItemRow() {
    return this._fb.group({
      CropName: [''],
      CropQty: ['']
    });
  }

  onStaticSubmit() {
    if (this.farmerId === null || this.noOfCropTypes === null || this.farmerId === "" || this.noOfCropTypes === "") {
      alert("Please enter data in both fields.");
    }
    else {
      if (typeof (Number(this.farmerId)) === 'number' && this.farmerId > 0 && typeof (Number(this.farmerId)) === 'number' && this.noOfCropTypes > 0 && this.noOfCropTypes < 10) {
        this.clerkService.validateFarmerId(Number(this.farmerId))
          .subscribe(data => {
            if (data == true) {
              this.staticSubmit = true;
              this.disableAddCropDetails = true;
              //able the submit button if no. of items is equal to the entered no.of types
              if (this.TotalRow == this.noOfCropTypes) {
                this.dynamicSubmit = false;
              }
            }
            else {
              alert("Farmer not registered.")
            }
          });
      }
      else {
        alert("Entered input not accepted.");
      }
    }
  }

  addNewRow() {
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    if (this.TotalRow >= this.noOfCropTypes) {
      alert("Items added can't exceed no. of crop types provided.");
    }
    else {
      control.push(this.initItemRow());
      this.TotalRow = this.TotalRow + 1;
    }
    //able the submit button if no. of items is equal to the entered no.of types
    if (this.TotalRow == this.noOfCropTypes) {
      this.dynamicSubmit = false;
    }
  }

  deleteRow(index: number) {
    this.TotalRow = this.TotalRow - 1;
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    control.removeAt(index);
    //disable the submit button if no. of items is less than the entered no.of types
    if (this.TotalRow < this.noOfCropTypes) {
      this.dynamicSubmit = true;
    }
  }

  onDynamicSubmit() {
    this.allCropsEntered = true;
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    this.tempAllItems = control.value;

    for (let i = 0; i < control.value.length; i++) {
      this.tempCropName = (this.tempAllItems[i]).CropName;
      this.tempCropQty = (this.tempAllItems[i]).CropQty;
      //check if the fields for each item is empty or not
      if (this.tempCropName === "" || this.tempCropQty === "") {
        alert("Enter all details please.");
        this.allCropsEntered = false;
      }
    }

    this.cropPattern = new RegExp('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$');

    //if none of the fields are empty then below operation will take place
    if (this.allCropsEntered == true) {
      for (let i = 0; i < control.value.length; i++) {
        this.cropNameCheck = false; this.cropQtyCheck = false; this.foundWrongItem = false;
        if (this.cropPattern.test((this.tempAllItems[i]).CropName) === true) {
          this.cropNameCheck = true;
        }
        if ((this.tempAllItems[i]).CropQty > 0) {
          this.cropQtyCheck = true;
        }
        if (this.cropNameCheck && this.cropQtyCheck === true) {
          this.requiredStorage = this.requiredStorage + Number((this.tempAllItems[i]).CropQty);
          this.tempCropToBuy = new CropsToBuy((this.tempAllItems[i]).CropName, (this.tempAllItems[i]).CropQty);
          this.dataService.addItem(this.tempCropToBuy);
          this.clerkcrops[i] = new ClerkCrop(this.farmerId, this.clerkId, (this.tempAllItems[i]).CropName, (this.tempAllItems[i]).CropQty);
          this.dataService.addClerkCropItem(this.clerkcrops[i]);

          this.clerkService.getSingleCropPrice(this.clerkcrops[i])
            .subscribe(data => {
              if (data === 0) {
                alert(((this.tempAllItems[i]).CropName) + "has no MSP set. So no money will be credited for it.");
              }
            });
        }
        else {
          this.foundWrongItem = true;
          this.dataService.allCrops = [];
          this.dataService.allClerkCropItems = [];
          break;
        }
      }

      if (this.foundWrongItem === true) {
        alert("Entered data invalid.")
      }
      else {
        this.clerkService.getStorageByClerkId(this.clerkId)
          .subscribe(data => {
            this.availableStorage = data;
            if (Number(this.availableStorage) - Number(this.requiredStorage) < 0) {
              alert("Storage not enough!");
              this.onCancel();
            }
            else {
              this.router.navigate(['/clerk/confirmCredit']);
            }
          }
          );
      }
    }
  }

  onCancel() {
    this.farmerId = null;
    this.noOfCropTypes = null;
    this.staticSubmit = false;
    this.disableAddCropDetails = false;
  }
}

