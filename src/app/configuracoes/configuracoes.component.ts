import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {

  constructor() {
    this.languages = [
      {label:"Português", value:"Portugues"},
      {label:"Inglês", value:"Portugues"}
    ]
   }

  ngOnInit(): void {
  }

  languages: SelectItem[];

  selectedLanguage: string;

  gravarConfig(){
    console.log("Gravado!");
  }

}
