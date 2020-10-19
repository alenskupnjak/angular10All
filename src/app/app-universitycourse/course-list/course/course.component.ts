import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Course } from '../../../model/course';
import { CoursesService } from '../../..//services/courses.service';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
} from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';
import { LessonsDataSource } from '../../../services/lessons.datasource';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit, AfterViewInit {
  course: Course;

  dataSource: LessonsDataSource;

  displayedColumns = ['seqNo', 'description', 'duration'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // ElementRef daje referencu na DOM element
  @ViewChild('input') input: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];
    this.dataSource = new LessonsDataSource(this.coursesService);
    this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => {
      console.log('vvv');
      return (this.paginator.pageIndex = 0);
    });

    // prati input iz DOM-a
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => {
          console.log('xx');

          this.paginator.pageIndex = 0;
          this.loadLessonsPage();
        })
      )
      .subscribe();

    // https://rxjs-dev.firebaseapp.com/api/index/function/merge
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadLessonsPage()))
      .subscribe();
  }

  loadLessonsPage() {
    this.dataSource.loadLessons(
      this.course.id,
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }
}
