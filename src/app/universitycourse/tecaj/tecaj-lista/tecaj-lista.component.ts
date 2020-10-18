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
import { MatTableDataSource } from '@angular/material/table';
import { Course } from '../../../model/course';
import { CoursesService } from '../../../services/courses.service';
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
  selector: 'app-tecaj-lista',
  templateUrl: './tecaj-lista.component.html',
  styleUrls: ['./tecaj-lista.component.css'],
})
export class TecajListaComponent implements OnInit, AfterViewInit {
  course: Course;

  dataSource = new MatTableDataSource([]);

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
    console.log(this.course);

    this.coursesService
      .findAllCourseLessons(this.course.id)
      .subscribe((lessons) => {
        return (this.dataSource.data = lessons);
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  searchLessons(search){
    this.dataSource.filter = search.toLowerCase().trim();
  }
}
