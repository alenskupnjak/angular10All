import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Course } from 'src/app/model/course';
import { CourseTecajDialogComponent } from '../course-tecaj-dialog/course-tecaj-dialog.component';

@Component({
  selector: 'app-tecaj',
  templateUrl: './tecaj.component.html',
  styleUrls: ['./tecaj.component.css'],
})
export class TecajComponent implements OnInit {
  // primam podatke iz <app-card-list>
  @Input() courses: Course[];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  editCourse(courseData) {
    // definiranje dialoga
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // selektia prvi input file
    dialogConfig.autoFocus = true;
    dialogConfig.data = courseData;
    // u pripadajuci modul obavezno ubaciti
    //   entryComponents: [CourseTecajDialogComponent] !!!!
    this.dialog
      .open(CourseTecajDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe((data) => {
        console.log('zatvorio sam dialog, za info....',data);
      });
  }
}
