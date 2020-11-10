import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-item-confirmation-dialog',
  templateUrl: './remove-item-confirmation-dialog.component.html',
  styleUrls: ['./remove-item-confirmation-dialog.component.css']
})
export class RemoveItemConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RemoveItemConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  proceed() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
