import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteCadastroComponent } from './cadastro/cliente-cadastro.component';
import { FormsModule} from '@angular/forms'
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [ClienteComponent, ClienteCadastroComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    TableModule
  ]
})
export class ClienteModule { }
 