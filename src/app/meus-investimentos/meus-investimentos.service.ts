import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {take} from 'rxjs/operators';
import { Acao } from './acao';

@Injectable({
  providedIn: 'root'
})
export class MeusInvestimentosService {

  private readonly apiAcoes = "http://localhost:65534/api/acoes";

  constructor(private http:HttpClient) { }

  addAcao(ticker:any, quantidade:number, valor:number){
    let acao = {
      ticker: ticker,
      quantidade: quantidade,
      valor: valor
    }
    return this.http.post(this.apiAcoes, acao).pipe(take(1));
  }

  getAcoes(){
    return this.http.get<Acao[]>(this.apiAcoes);
  }
}
