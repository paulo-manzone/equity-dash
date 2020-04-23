import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeusInvestimentosComponent } from './meus-investimentos/meus-investimentos.component';
import { AcoesDaBolsaComponent } from './acoes-da-bolsa/acoes-da-bolsa.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { ValuationComponent } from './valuation/valuation.component';


const routes: Routes = [
  {path:'meus-investimentos', component: MeusInvestimentosComponent},
  {path:'', component: MeusInvestimentosComponent},
  {path:'acoes-da-bolsa', component: AcoesDaBolsaComponent},
  {path:'valuation', component: ValuationComponent},
  {path:'configuracoes', component: ConfiguracoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
