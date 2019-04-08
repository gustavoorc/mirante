import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClienteCadastroComponent } from './cadastro/cliente-cadastro.component';


const routes: Routes = [
{ path: '', component: ClienteComponent},
{ path: 'addCliente', component: ClienteCadastroComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ClienteRoutingModule { }
