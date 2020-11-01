import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/model/course';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-tecaj-dialog',
  templateUrl: './course-tecaj-dialog.component.html',
  styleUrls: ['./course-tecaj-dialog.component.css'],
})
export class CourseTecajDialogComponent implements OnInit {
  private postsSub: Subscription;
  form: FormGroup;
  description: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseTecajDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: Course
  ) {
    this.description = course.description;

    // definiranje forme
    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [course.longDescription, Validators.required],
    });
  }

  ngOnInit(): void {}

  save() {
    // ovim vracam podatke u komponentu koja ga je pozvala!
    this.dialogRef.close(this.form.value);
  }

  close() {
    console.log(this.form.value);
    console.log(this.form.value.releasedAt);
    console.log(this.form.value.releasedAt._d);
    this.dialogRef.close();
  }
}
