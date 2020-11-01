import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit, AfterViewInit, OnDestroy {
  // primam podatke iz <app-card-list>
  @Input() courses: Course[];

  private postsSubDestroy: Subscription;

  constructor(public courseService: CoursesService) {}

  ngOnInit(): void {
    this.postsSubDestroy = this.courseService.footerData.subscribe((data) => {
      console.log('CardListComponent');
    });
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.postsSubDestroy.unsubscribe();
  }
}
