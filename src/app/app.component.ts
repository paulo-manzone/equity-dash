import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _router:Router){}

  title = 'equity-dash';

  items: MenuItem[];

  activeItem: MenuItem;

    ngOnInit() {
        this.items = [
            {label: 'Meus Investimentos', icon: 'pi pi-fw pi-home', routerLink:'meus-investimentos'},
            {label: 'Ações da Bolsa', icon: 'pi pi-fw pi-chart-line', routerLink:'acoes-da-bolsa'},
            {label: 'Valuation', icon: 'pi pi-fw pi-money-bill', routerLink:'valuation'},
            {label: 'Configurações', icon: 'pi pi-fw pi-cog', routerLink:'configuracoes'}
        ];

        this.activeItem = this.items[0];
    }
}
