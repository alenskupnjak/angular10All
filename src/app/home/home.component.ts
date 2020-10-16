import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { COURSES, LESSONS } from '../model/db-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  beginnerCourses: Course[];
  advancedCourses: Course[];

  constructor() {}

  ngOnInit(): void {
    const courses = <any>Object.values(COURSES);
    const lessonsAny = <any>Object.values(LESSONS);
    const lessons = Object.values(LESSONS);

    console.log(courses, lessonsAny, lessons);

    this.beginnerCourses = courses.filter(
      (course) => course.category === 'BEGINNER'
    );

    this.advancedCourses = courses.filter(
      (course) => course.category === 'ADVANCED'
    );
  }
}
