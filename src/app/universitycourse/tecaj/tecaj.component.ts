import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-tecaj',
  templateUrl: './tecaj.component.html',
  styleUrls: ['./tecaj.component.css'],
})
export class TecajComponent implements OnInit {
  // primam podatke iz <app-card-list>
  @Input() courses: Course[];

  constructor() {}

  ngOnInit(): void {}
}
