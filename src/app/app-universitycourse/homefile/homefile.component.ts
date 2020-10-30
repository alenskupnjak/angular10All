import { Component, OnInit } from '@angular/core';
import { COURSES, LESSONS } from '../../model/db-datafile';
import { Course } from '../../model/course';
import { BackfileService } from '../service/backfile.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TransformVisitor } from '@angular/compiler/src/render3/r3_ast';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

@Component({
  selector: 'app-homefile',
  templateUrl: './homefile.component.html',
  styleUrls: ['./homefile.component.css'],
})
export class HomefileComponent implements OnInit {
  // Preko datoteka
  beginnerCourses: Course[];
  advancedCourses: Course[];
  beginnerCoursesBack = [];
  advancedCoursesBack = [];

  constructor(private serviceBack: BackfileService) {}

  ngOnInit(): void {
    this.serviceBack.findAllFileCourses().subscribe(
      (data) => {
        console.log(data);
        data.jsonData.map((element) => {
          if (element.category.toUpperCase() === 'ADVANCED') {
            this.advancedCoursesBack.push(element);
          } else {
            this.beginnerCoursesBack.push(element);
          }
          return element;
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
