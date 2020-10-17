import { Component, OnInit } from '@angular/core';
import { COURSES, LESSONS } from '../../model/db-datafile';
import { Course } from '../../model/course';

@Component({
  selector: 'app-homefile',
  templateUrl: './homefile.component.html',
  styleUrls: ['./homefile.component.css']
})
export class HomefileComponent implements OnInit {
    // Preko datoteka
    beginnerCourses: Course[];
    advancedCourses: Course[];

  constructor() { }

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
