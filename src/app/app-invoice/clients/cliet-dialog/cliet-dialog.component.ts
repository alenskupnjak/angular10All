import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-cliet-dialog',
  templateUrl: './cliet-dialog.component.html',
  styleUrls: ['./cliet-dialog.component.css'],
})
export class ClietDialogComponent implements OnInit {
  clientForm: FormGroup;
  title = 'Novi klijent';

  constructor(
    public dialogRef: MatDialogRef<ClietDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initClientForm();
    // ako je this.data nedefiniran, znaci da je novi zapis.
    if (this.data['firstName']) {
      this.title = 'Izmjena podataka';
      this.clientForm.setValue({
        firstName: this.data['firstName'],
        lastName: this.data['lastName'],
        email: this.data['email'],
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private initClientForm() {
    // definiramo polja forme
    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
