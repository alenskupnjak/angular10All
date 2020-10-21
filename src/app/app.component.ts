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
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements OnDestroy, OnChanges, OnInit, AfterViewInit {
  izborAplikacije = 'course';
  // pocetna vrijednost za sidemenu, zatvoren je
  isShowing: boolean = false;

  // Sticky START
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  // sticky END


  @ViewChild('menuSide') menuSide;

  constructor(public router: Router) {}

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  ngOnInit() {
    // this.isShowing = false;
    // console.log(this.menuSide);
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
    this.router.navigate([aplikacija])
  }

  // Sticky Sticky Sticky Sticky Sticky Sticky Sticky
  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      console.log('----');

      this.sticky = true;
    } else {
      console.log('++++');
      this.sticky = false;
    }
  }
  // Sticky Sticky Sticky Sticky Sticky Sticky Sticky

}
