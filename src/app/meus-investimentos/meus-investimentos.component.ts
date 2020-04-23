import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-investimentos',
  templateUrl: './meus-investimentos.component.html',
  styleUrls: ['./meus-investimentos.component.scss']
})
export class MeusInvestimentosComponent implements OnInit {

  data:any;
  acoes = [
    {ticker: "BBAS3", valor:"10.00"},
    {ticker: "BBAS3", valor:"10.00"},
    {ticker: "BBAS3", valor:"10.00"},
    {ticker: "BBAS3", valor:"10.00"},
    {ticker: "BBAS3", valor:"10.00"},
    {ticker: "BBAS3", valor:"10.00"},
    {ticker: "BBAS3", valor:"10.00"}
  ]

  constructor() {
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
  }

}
