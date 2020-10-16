import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  // primam podatke iz <app-card-list>
  @Input() courses: Course[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.courses);
  }
}
