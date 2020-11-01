import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable, Subscription } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // beginnerCourses$: Observable<Course[]>;
  beginnerCoursesBack$: Observable<any>;
  advCourses;

  private destroySub: Subscription;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    // subscribe metoda

    // const courses$ = this.coursesService.findAllCourses();
    const coursesBack$ = this.coursesService.findAllCoursesBACK();
    // console.log(courses$, coursesBack$);

    // this.beginnerCourses$ = courses$.pipe(
    //   map((courses) =>
    //     courses.filter((course) => course.category === 'BEGINNER')
    //   )
    // );

    this.beginnerCoursesBack$ = coursesBack$.pipe(
      map((courses) => {
        return courses.payload.filter(
          (course) => course.category === 'BEGINNER'
        );
      })
    );

    // console.log(this.beginnerCourses$, this.beginnerCoursesBack$);

    // subscribe metoda
    this.destroySub = this.coursesService
      .findAllCoursesBACK()
      .subscribe((data) => {
        let podatak = data.payload.filter((tecaj) => {
          return tecaj.category === 'ADVANCED';
        });
        this.advCourses = podatak;
      });

    // // Klasična metoda
    // this.coursesService.findAllCourses().subscribe((data) => {
    //   console.log(data);

    //   let podatak = data.filter((tecaj) => {
    //     return tecaj.category === 'ADVANCED';
    //   });
    //   this.advCourses = podatak;
    // });
  }

  ngOnDestroy() {
    this.destroySub.unsubscribe();
  }
}
