import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faCoffee, faTable } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements OnDestroy, OnChanges, OnInit, AfterViewInit {
  // Početna aplikacija
  izborAplikacije = 'app-invoice';

  // Font Awesome Icons
  faCoffee = faCoffee;
  faTable = faTable;

  URLroute:string;

  // pocetna vrijednost za sidemenu, zatvoren je
  isShowing: boolean = false;

  // Sticky START
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  // sticky END

  @ViewChild('menuSide') menuSide;

  constructor(public router: Router, private aktivnaRouta: ActivatedRoute) {}

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  ngOnInit() {

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.URLroute = this.router.url
        console.log('this.URLroute=', this.URLroute);
      }
    });

    let ruta = this.aktivnaRouta.params.subscribe((e) => {
      console.log(e);
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy()');
  }

  ngOnChanges() {
    console.log('ngOnChanges()');
  }

  ngAfterViewInit() {
    console.log(this.menuSide);

    // Sticky Sticky Sticky Sticky Sticky Sticky Sticky
    // this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  // izbor aplikacije
  toggleAplikacija(aplikacija) {
    this.izborAplikacije = aplikacija;
    this.router.navigate([aplikacija]);
  }

  // Sticky Sticky Sticky Sticky Sticky Sticky Sticky
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      console.log('----');

      this.sticky = true;
    } else {
      console.log('++++');
      this.sticky = false;
    }
  }
  // Sticky Sticky Sticky Sticky Sticky Sticky Sticky
}
