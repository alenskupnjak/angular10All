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

@Component({
  selector: 'app-tecaj-lista',
  templateUrl: './tecaj-lista.component.html',
  styleUrls: ['./tecaj-lista.component.css'],
})
export class TecajListaComponent implements OnInit, AfterViewInit {
  course: Course;
  spinnerKojiSeVrti: boolean;

  // veza sa datatable, nužno
  dataSource = new MatTableDataSource([]);

  //  kolone koje se prikazuju u tabeli , raspored važan
  displayedColumns = ['seqNo', 'description', 'duration'];

  // @ViewChild nam omogučije pristup u DOM
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // ElementRef daje referencu na DOM element
  @ViewChild('input') input: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.spinnerKojiSeVrti = true;  // spiner START
    // povlačenje id iz routera
    let id = this.route.snapshot.params['id'];

    // povlačenje podataka za Lessson
    this.coursesService.findCourseById(id).subscribe((data) => {
      this.course = data;
    });

    // povlačenje detaljnih podataka iz lesson
    this.coursesService.findAllCourseLessons(id).subscribe((lessons) => {
      this.dataSource.data = lessons;
      this.spinnerKojiSeVrti = false; // spiner END
    });
  }

  ngAfterViewInit() {
    // definiranje paginatora i sortiranja
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // filtriranje podataka
  searchLessons(search) {
    this.dataSource.filter = search.toLowerCase().trim();
  }
}
