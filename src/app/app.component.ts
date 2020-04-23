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
            {label: 'Meus Investimentos', icon: 'pi pi-fw pi-home'},
            {label: 'Ações da Bolsa', icon: 'pi pi-fw pi-chart-line'},
            {label: 'Valuation', icon: 'pi pi-fw pi-money-bill'},
            {label: 'Configurações', icon: 'pi pi-fw pi-cog'}
        ];

        this.activeItem = this.items[0];
    }

    goTo(item){
      switch(item.label){
        case "Meus Investimentos":
          this._router.navigate(['/meus-investimentos']);
          break;
        case "Ações da Bolsa":
          this._router.navigate(['/acoes-da-bolsa']);
          break;
        case "Valuation":
          this._router.navigate(['/valuation']);
          break;
        case "Configurações":
          this._router.navigate(['/configuracoes']);
          break;
      }
    }
}
