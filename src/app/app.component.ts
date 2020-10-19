import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy, OnChanges, OnInit {
  title = 'angular10All';
  menu;

  constructor(router: Router) {
    router.events.subscribe((e) => {
      console.log(e);
    });
  }

  ngOnInit() {
    // console.log(menuSide);

    // this.menu = menuSide;
  }

  ngOnDestroy() {
    console.log('da vidimo');
  }

  ngOnChanges() {
    console.log('promjena');
  }
}
