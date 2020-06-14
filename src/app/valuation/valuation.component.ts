import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.scss']
})
export class ValuationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dividendo:number;
  g: number;
  k:number;

  calcGordon(){
    console.log("Gordon")
  }

  calcGraham(){
    console.log("Graham")
  }

}
