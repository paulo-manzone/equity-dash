import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {

  constructor() {
    this.cars = [
      {label:"Português", value:"Portugues"},
      {label:"Inglês", value:"Portugues"}
    ]
   }

  ngOnInit(): void {
  }

  cars: SelectItem[];

  selectedCar1: string;

  gravarConfig(){
    console.log("Gravado!");
  }

}
