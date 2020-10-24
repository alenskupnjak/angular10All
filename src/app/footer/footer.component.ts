import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(public footerService: CoursesService) {}

  podaciKrozProgram = [];

  ngOnInit(): void {
    this.footerService.footerData.subscribe((data) => {
      this.podaciKrozProgram = data
      this.podaciKrozProgram = data;
      // console.log( 'this.podaciKrozProgram=', this.podaciKrozProgram);
    });
  }
}
