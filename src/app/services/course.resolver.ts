import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
// import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './courses.service';

@Injectable()
export class CourseResolver implements Resolve<any> {
  constructor(private coursesService: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.coursesService.findCourseByIdBACK(route.params['id']);
  }
}
