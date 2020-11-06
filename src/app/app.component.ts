import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  isDevMode,
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
import {
  faCoffee,
  faTable,
  faSignOutAlt,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { MediaChange } from '@angular/flex-layout';
import { MediaObserver } from '@angular/flex-layout';
import { AfterContentInit } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list/grid-list';

import { JwtLocalStorageService } from './app-invoice/services/jwt.localstorege.service';
import { AuthService } from './app-invoice/services/auth.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy, OnInit {
  // Korisnik ispisan na menu
  user: string = '';

  // Početna aplikacija
  title = 'angular10All';
  izborAplikacije = '';

  // Font Awesome Icons
  faCoffee = faCoffee;
  faTable = faTable;
  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;

  // Zamjenjeno opcijom [routerLinkActiveOptions]="{exact:true}"
  URLroute: string;

  // pocetna vrijednost za sidemenu, zatvoren je
  isShowing: boolean = false;
  @ViewChild('menuSide') menuSide;

  constructor(
    public router: Router,
    private JwtService: JwtLocalStorageService,
    private aktivnaRouta: ActivatedRoute,
    private authService: AuthService,
    private titleService: Title
  ) {}

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  ngOnInit() {
    // Detektiram u kojem mod radim
    if (isDevMode()) {
      console.log("Development Mode!");
      this.titleService.setTitle( 'Radni Ang10' );
    } else {
      this.titleService.setTitle( 'Angular 10 all' );
      console.log("Super. Production mode!");
    }


    // Prvo učitavanje brišemo sve podatke od logiranja
    this.JwtService.destroyToken();

    // Pratimo promjenu logiranih korisnika, ispisujemo ime na menu
    this.authService.userAddedSource.subscribe((user) => {
      if (user) {
        this.izborAplikacije = 'app-invoice'
        this.user = user;
      }
    });

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        // console.log('0-', this.router.config[0]);
        this.URLroute = this.router.url;
        // console.log('this.URLroute=', this.URLroute);
      }

      if (e instanceof NavigationStart) {
        this.URLroute = this.router.url;
        // console.log('NavigationStart=', this.URLroute);
      }
    });
  }



  // izbor aplikacije
  toggleAplikacija(aplikacija) {
    this.izborAplikacije = aplikacija.trim();
    this.router.navigate([aplikacija]);
  }

  logoutInvoiceAplication() {
    this.authService.logOut().subscribe(
      (data) => {
        this.user = '';
        this.JwtService.destroyToken();
        this.router.navigate(['about']);
        this.izborAplikacije =''
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    // this.postsSub.unsubscribe();
  }
}
