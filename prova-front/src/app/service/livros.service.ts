import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro} from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private baseUrl= "http://localhost:5000/api/produto/list";

  constructor(private http: HttpClient)  { }

  listar(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.baseUrl}/list`);
  }

}
