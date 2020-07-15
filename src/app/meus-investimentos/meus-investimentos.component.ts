import { Component, OnInit } from '@angular/core';
import { MeusInvestimentosService } from './meus-investimentos.service';
import { Acao } from './acao';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-meus-investimentos',
  templateUrl: './meus-investimentos.component.html',
  styleUrls: ['./meus-investimentos.component.scss']
})
export class MeusInvestimentosComponent implements OnInit {
  
  acaoEdit:any;
  valorEdit:any;
  quantidadeEdit:any;

  data:any;
  acoes$:Observable<Acao[]>

  insights = [
    {texto:"Banco do Brasil está abaixo de seu valor intrínseco"},
    {texto:"Você possui uma baixa diversificação de ativos"}
  ]

  addClick(){
    this.service.addAcao(this.acaoEdit, this.quantidadeEdit, this.valorEdit).subscribe(
      success => console.log("Sucesso!"),
      error => console.log(error),
      () => console.log("finalizado")
    );
  }

  constructor(private service:MeusInvestimentosService) {
    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };

  }

  ngOnInit(): void {
    this.acoes$ = this.service.getAcoes();
  }

  

}
