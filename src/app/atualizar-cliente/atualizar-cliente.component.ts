import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../models/Cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-atualizar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './atualizar-cliente.component.html',
  styleUrl: './atualizar-cliente.component.css'
})
export class AtualizarClienteComponent {
  public clienteId: number = 0;

  public cliente: Cliente = new Cliente(0, "", "");

  constructor(private _clienteService: ClienteService, private _router: Router, private _activatedRoute: ActivatedRoute) {this._activatedRoute.params.subscribe(params => this.clienteId = params['id']);
  }
  ngOnInit(): void {
    this.listarCliente();
  }
  listarCliente(): void {
    this._clienteService.getCliente(this.clienteId).subscribe(
      (res: any) => {
        this.cliente = new Cliente(
          res[0].id,
          res[0].nome,
          res[0].endereco
        );
      }
    )
  }
  atualizar(id: number) {
    this._clienteService.atualizarCliente(id, this.cliente).subscribe(
      cliente => { this.cliente = new Cliente(0, "", "") },
      err => { alert("Erro ao atualizar") }
    );
    this._router.navigate(["/listar"]);
    console.log(this.cliente)
  }

}
