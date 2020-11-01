import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course } from '../model/course';
import { Lesson } from '../model/lesson';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  constructor(private http: HttpClient) {}

  // OBSERVABLE  ---kojim cemo slati obavijest u footer podatka kroz program
  public footerData = new Subject<any>();

  findCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${courseId}`).pipe(
      map((res) => {
        this.footerData.next([res.id, res.description, res.longDescription]);
        return res;
      })
    );
  }

  findCourseByIdBACK(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${environment.URL_ANGULAR10ALLBACKEND}/appcourse/api/courses/${courseId}`).pipe(
      map((res) => {
        console.log(res);
        // this.footerData.next([res.id, res.description, res.longDescription]);
        return res['podatak'];
      })
    );
  }


  findAllCoursesBACK(): Observable<any> {
    return this.http
      .get(`${environment.URL_ANGULAR10ALLBACKEND}/appcourse/api/courses`)
      .pipe((data) => {
        console.log('1', data);
        return data;
      });
  }

  // // Povuci sve podatke
  // findAllCourses(): Observable<Course[]> {
  //   return this.http
  //     .get('/api/courses')
  //     .pipe((data) => {
  //       console.log('2',data);

  //       return data;
  //     })
  //     .pipe(
  //       map((res) => {
  //         let footer = [];
  //         res['payload'].forEach((e) => {
  //           footer.push([e.id, e.description, e.iconUrl]);
  //         });
  //         this.footerData.next(footer);

  //         return res['payload'];
  //       })
  //     );
  // }

  findAllCourseLessonsBACK(courseId): Observable<any> {
    return this.http
      .get(`${environment.URL_ANGULAR10ALLBACKEND}/appcourse/api/lessons/${courseId}`)
      .pipe((data) => {
        console.log(data);
        return data;
      })
  }


  findAllCourseLessons(courseId: number): Observable<Lesson[]> {
    return this.http
      .get('/api/lessons', {
        params: new HttpParams()
          .set('courseId', courseId.toString())
          .set('pageNumber', '0')
          .set('pageSize', '1000'),
      })
      .pipe(
        map((res) => {
          let footer = [];
          res['payload'].forEach((e) => {
            footer.push([e.id, e.description, e.iconUrl]);
          });
          this.footerData.next(footer);
          return res['payload'];
        })
      );
  }

  findLessons(
    courseId: number,
    filter = '',
    sortOrder = 'asc',
    pageNumber = 0,
    pageSize = 3
  ): Observable<Lesson[]> {
    return this.http
      .get('/api/lessons', {
        params: new HttpParams()
          .set('courseId', courseId.toString())
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString()),
      })
      .pipe(
        map((res) => {
          let footer = [];
          res['payload'].forEach((e) => {
            footer.push([e.id, e.description, e.iconUrl]);
          });
          this.footerData.next(footer);

          return res['payload'];
        })
      );
  }
}
