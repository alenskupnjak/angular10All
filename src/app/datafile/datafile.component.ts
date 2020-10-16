import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-datafile',
  templateUrl: './datafile.component.html',
  styleUrls: ['./datafile.component.css'],
})
export class DatafileComponent implements OnInit {
  @Input() coursesFile: Course[];

  constructor() {}

  ngOnInit(): void {}
}
