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
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { faCoffee, faTable } from '@fortawesome/free-solid-svg-icons';
import { MediaChange } from '@angular/flex-layout';
import { MediaObserver } from '@angular/flex-layout';
import { AfterContentInit } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy, OnChanges, OnInit {
  breakpoint: number;

  // Početna aplikacija
  title = 'alenq';
  izborAplikacije = 'app-invoice';

  // Font Awesome Icons
  faCoffee = faCoffee;
  faTable = faTable;

  // Zamjenjeno opcijom [routerLinkActiveOptions]="{exact:true}"
  URLroute: string;

  // pocetna vrijednost za sidemenu, zatvoren je
  isShowing: boolean = false;

  // Sticky START
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  // sticky END

  @ViewChild('menuSide') menuSide;

  constructor(
    public router: Router,
    private aktivnaRouta: ActivatedRoute,
    private observableMedia: MediaObserver
  ) {}

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  ngOnInit() {
    this.router.navigate['app-invoice'];

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        // console.log('0-', this.router.config[0]);
        this.URLroute = this.router.url;
        console.log('this.URLroute=', this.URLroute);
      }

      if (e instanceof NavigationStart) {
        this.URLroute = this.router.url;
        console.log('NavigationStart=', this.URLroute);
      }
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy()');
  }

  ngOnChanges() {
    console.log('ngOnChanges()');
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

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 5 : 6;
    console.log(this.breakpoint);
  }
}
