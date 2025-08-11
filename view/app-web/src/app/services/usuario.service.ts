import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Usuario{
  id?: number;
  nome: string;
  email: string
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
private api = 'http://localhost:3012/api/usuarios'

  constructor(private http: HttpClient) { }

  getUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.api)
  }
  adicionar(usuario: Usuario): Observable<any>{
    return this.http.post(this.api, usuario)
  }
  atualizar(id: number, usuario: Usuario): Observable<any>{
    return this.http.put(`${this.api}/${id}`, usuario)
  }
  deletar(id: number): Observable<any>{
    return this.http.delete(`${this.api}/${id}`)
  }
}