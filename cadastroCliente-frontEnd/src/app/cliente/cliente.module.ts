import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteCadastroComponent } from './cadastro/cliente-cadastro.component';
import { FormsModule} from '@angular/forms'
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';


@NgModule({
  declarations: [ClienteComponent, ClienteCadastroComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    FieldsetModule,
    ButtonModule,
    InputMaskModule
  ]
})
export class ClienteModule { }
 