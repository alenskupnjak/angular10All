import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
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
import { merge, fromEvent, Subscription } from 'rxjs';
import { LessonsDataSource } from '../../../services/lessons.datasource';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroySub: Subscription;
  course: Course;


  // podaci u tabeli
  dataSourceBACK = new MatTableDataSource([]);

  // dataSource: LessonsDataSource;
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
    // console.log('xxx', this.course);

    this.destroySub = this.coursesService
      .findAllCourseLessonsBACK(this.course.id)
      .subscribe((data) => {
        console.log(data);
        this.dataSourceBACK.data = data.trazim;
      });

    // this.dataSource = new LessonsDataSource(this.coursesService);
    // console.log(this.dataSource);

    // this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);
  }

  ngAfterViewInit() {
    // definiranje paginatora i sortiranja
    this.dataSourceBACK.paginator = this.paginator;
    this.dataSourceBACK.sort = this.sort;

    // this.sort.sortChange.subscribe(() => {
    //   return (this.paginator.pageIndex = 0);
    // });

    // prati input iz DOM-a
    // fromEvent(this.input.nativeElement, 'keyup')
    //   .pipe(
    //     debounceTime(200),
    //     distinctUntilChanged(),
    //     tap(() => {
    //       this.paginator.pageIndex = 0;
    //       this.loadLessonsPage();
    //     })
    //   )
    //   .subscribe();

    // https://rxjs-dev.firebaseapp.com/api/index/function/merge
    // merge(this.sort.sortChange, this.paginator.page)
    //   .pipe(tap(() => this.loadLessonsPage()))
    //   .subscribe();
  }

  // loadLessonsPage() {
  //   this.dataSource.loadLessons(
  //     this.course.id,
  //     this.input.nativeElement.value,
  //     this.sort.direction,
  //     this.paginator.pageIndex,
  //     this.paginator.pageSize
  //   );
  // }

  pokaziPodatke(data, lesson) {
    console.log(data);
    console.log(lesson);
  }

  ngOnDestroy() {
    this.destroySub.unsubscribe();
  }
}
