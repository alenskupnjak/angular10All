import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],

  // backgraund je pregažen sa backgraundom nekog drugog elementa
  // encapsulation: ViewEncapsulation.None
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
