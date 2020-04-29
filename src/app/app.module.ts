import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TabMenuModule} from 'primeng/tabmenu';

import {CardModule} from 'primeng/card';
import { MeusInvestimentosComponent } from './meus-investimentos/meus-investimentos.component';
import { AcoesDaBolsaComponent } from './acoes-da-bolsa/acoes-da-bolsa.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { ValuationComponent } from './valuation/valuation.component';
import { ChartModule } from 'primeng/chart';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ButtonModule} from 'primeng/button';
import {OrderListModule} from 'primeng/orderlist';


@NgModule({
  declarations: [
    AppComponent,
    MeusInvestimentosComponent,
    AcoesDaBolsaComponent,
    ConfiguracoesComponent,
    ValuationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TabMenuModule,
    CardModule,
    ChartModule,
    ScrollPanelModule,
    ButtonModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
