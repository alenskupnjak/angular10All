import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;
  advCourses;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    const courses$ = this.coursesService.findAllCourses();

    this.coursesService.findAllCourses().subscribe((data) => {
      let podatak = data.filter((tecaj) => {
        return tecaj.category === 'ADVANCED';
      });
      this.advCourses = podatak;
    });

    this.beginnerCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'BEGINNER')
      )
    );

    this.advancedCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'ADVANCED')
      )
    );
  }
}
