import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { COURSES, LESSONS } from '../model/db-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Preko datoteka
  beginnerCourses: Course[];
  advancedCourses: Course[];

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor() {}

  ngOnInit(): void {
    //  izvor podataka datoteka
    const courses = <any>Object.values(COURSES);
    const lessons = <any>Object.values(LESSONS);
    console.log(courses, lessons);
    this.beginnerCourses = courses.filter(
      (course) => course.category === 'BEGINNER'
    );
    this.advancedCourses = courses.filter(
      (course) => course.category === 'ADVANCED'
    );


    
  }
}
