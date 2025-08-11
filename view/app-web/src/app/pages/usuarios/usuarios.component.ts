import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { UsuarioService, Usuario } from '../../services/usuario.service';


@Component({
  selector: 'app-usuarios',
  imports: [CommonModule, FormsModule], // para ativar ngFor, ngModel
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit{

  usuarios: Usuario[] = [];
  usuario: Usuario = { nome: '', email: '' }
  editando = false;
  idEdicao = 0

  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.getUsuario().subscribe(data => this.usuarios = data)
  }
  salvar(){
    if(this.editando){
      this.service.atualizar(this.idEdicao, this.usuario).subscribe(() => {
        this.editando = false;
        this.usuario = {nome: '', email: ''}
        this.listar()
      })
    }
    else{
      this.service.adicionar(this.usuario).subscribe(() => {
        this.usuario = {nome: '', email: ''}
        this.listar()
      })
    }
  }
  editar(u: Usuario){
    this.usuario = {...u};
    this.idEdicao = u.id!;
    this.editando = true;
  }

  excluir(id: number){
    this.service.deletar(id).subscribe(() => this.listar())
  }

}
