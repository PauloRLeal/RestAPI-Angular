import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/Cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css',
})
export class ListarClienteComponent {
  public clientes: Cliente[] = [];
  constructor(private _clienteService: ClienteService, private _router: Router) { }
  ngOnInit(): void {
    this.listarClientes();
  }
  listarClientes(): void {
    this._clienteService.getClientes().subscribe(
      retornaCliente => {
        this.clientes = retornaCliente.map(
          item => {
            return new Cliente(
              item.id,
              item.nome,
              item.endereco
            );
          }
        )
      }
    )
  }

  excluir(id: number){
    this._clienteService.excluirCliente(id).subscribe(
    cliente => {
    this.listarClientes();
    },
    err => {alert("Erro ao Excluir")}
    );
    this._router.navigate(["/lista"]);
    }
}
