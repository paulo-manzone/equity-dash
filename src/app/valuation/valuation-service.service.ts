import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValuationServiceService {

  constructor(private http:HttpClient) { }


  private readonly apiGordon = "http://localhost:65534/api/valuation/gordon";
  private readonly apiGraham = "http://localhost:65534/api/valuation/graham";

  calcGordon(dividendo:number, g:number, k:number):Promise<any>{
    
    let parameters:HttpParams = new HttpParams()
      .set('dividendo', dividendo.toString())
      .set('g', g.toString())
      .set('k', k.toString());

    return this.http.get(this.apiGordon, {params: parameters}).toPromise();
    
      
  }

  calcGraham(lpa:number, vpa:number):Promise<any>{
    
    let parameters:HttpParams = new HttpParams()
      .set('lpa', lpa.toString())
      .set('vpa', vpa.toString());


    return this.http.get(this.apiGraham, {params: parameters}).toPromise();
    
  }

}
