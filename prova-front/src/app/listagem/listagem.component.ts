import { Livro } from './../models/produto';
import { LivrosService } from './../service/livros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

   livros: Livro[] = []

  constructor(private service: LivrosService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(livros=> {
      this.livros = livros;
      console.log(livros);
    })
  }

}
