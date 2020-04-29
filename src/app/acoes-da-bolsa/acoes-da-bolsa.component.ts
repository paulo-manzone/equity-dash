import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acoes-da-bolsa',
  templateUrl: './acoes-da-bolsa.component.html',
  styleUrls: ['./acoes-da-bolsa.component.scss']
})
export class AcoesDaBolsaComponent implements OnInit {

  constructor() {
    this.data = {
      labels: ['20/03', '21/03', '22/03', '23/03', '24/03', '25/03', '26/03'],
      datasets: [
          {
              label: 'VVAR3',
              data: [8, 8.12, 8.17, 8.50, 8.9, 9.3, 9.05],
              fill: true,
              borderColor: '#4bc0c0'
          }
      ]
    }
  }

  data:any; 

  acoes = [
    {ticker: "BBAS3", valor:"10.00"},
    {ticker: "ITUB4", valor:"10.00"},
    {ticker: "SQIA3", valor:"10.00"},
    {ticker: "FLRY3", valor:"10.00"},
    {ticker: "VALE3", valor:"10.00"},
    {ticker: "PETR4", valor:"10.00"},
    {ticker: "VVAR3", valor:"10.00"}
  ];

  

  ngOnInit(): void {
  }

}
