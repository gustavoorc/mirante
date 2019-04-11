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
import {ReactiveFormsModule } from "@angular/forms"
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';




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
    InputMaskModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule
  
 

  ]
})
export class ClienteModule { }
 