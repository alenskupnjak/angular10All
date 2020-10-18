import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  // primam podatke iz <app-card-list>
  @Input() courses: Course[];

  constructor(public courseService: CoursesService) {}

  ngOnInit(): void {
    this.courseService.footerData.subscribe((data) => {
      console.log('CardListComponent');
    });
    console.log(this.courses);
  }
}
