import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-requisicao',
  templateUrl: './requisicao.component.html',
  styleUrls: ['./requisicao.component.scss']
})
export class RequisicaoComponent implements OnInit {

  // @Output() aoTransferir = new EventEmitter();

  nome:string = "Adicione um nome";
  escritor: string = "Adicione um escritor";
  genero: string = "Adicione um gênero";

  transferir(){
    console.log("transferencia")
    console.log('valor ', this.nome);
    console.log('escritor ', this.escritor);
    console.log('genero ', this.genero);
  }


  constructor() { }
  ngOnInit(): void {
  }

}
