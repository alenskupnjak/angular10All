import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokusni',
  templateUrl: './pokusni.component.html',
  styleUrls: ['./pokusni.component.css']
})
export class PokusniComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pdf(){

    window.open("Here Download PDF url", '_blank');
    console.log('oooo');
  }

}
