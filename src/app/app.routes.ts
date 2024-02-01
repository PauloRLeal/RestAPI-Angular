import { Routes } from '@angular/router';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { AtualizarClienteComponent } from './atualizar-cliente/atualizar-cliente.component';

export const routes: Routes = [
    { path: 'listar', component: ListarClienteComponent },
    {
        path: 'cadastrar', component:
            CadastrarClienteComponent
    },
    {
        path: 'editar/:id', component:
            AtualizarClienteComponent
    },
    { path: '', redirectTo: '/listar', pathMatch: 'full' }
];
