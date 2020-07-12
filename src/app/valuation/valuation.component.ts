import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';
import { ValuationServiceService } from './valuation-service.service';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.scss']
})
export class ValuationComponent implements OnInit {

  constructor(private service: ValuationServiceService) { }

  ngOnInit(): void {
  }

  dividendo:number;
  g:number;
  k:number;
  lpa:number;
  vpa:number;

  gordonEdit:string = " ";
  grahamEdit:string = " ";

  calcGordon(){
    if(this.k-this.g <= 0)  return this.gordonEdit = "Erro: k é menor ou igual g!";
    this.service.calcGordon(this.dividendo, this.g, this.k).then((valor) => {
      this.gordonEdit = "R$"+valor;
    }).catch((err) => {
      this.gordonEdit = err;
    })
    
  }

  calcGraham(){
    if(22.5*this.lpa*this.vpa < 0) return this.grahamEdit = "Erro: valores inválidos"; 
    this.service.calcGraham(this.lpa, this.vpa).then((valor) => {
      this.grahamEdit = "R$"+valor;
    }).catch((err) => {
      this.grahamEdit = err;
    })
    
  }

}
