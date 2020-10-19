import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy, OnChanges, OnInit, AfterViewInit {
  title = 'angular10All';
  // pocetna vrijednost za sidemenu, zatvoren je
  isShowing: boolean = false;


  @ViewChild('menuSide') menuSide;

  constructor(location: Location,router: Router) {
    router.events.subscribe((e) => {
      // console.log(location.path());
      this.isShowing = false;
    });
  }

  toggleSidenav() {
    this.isShowing = true;
 }

  ngOnInit() {
    console.log(this.menuSide);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy()');
  }

  ngOnChanges() {
    console.log('ngOnChanges()');
  }

  ngAfterViewInit() {

  }
}
