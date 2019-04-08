import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { ClienteComponent} from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{ path: 'cliente', loadChildren: './cliente/cliente.module#ClienteModule'},
{ path: 'home', loadChildren: './home/home.module#HomeModule' },
{ path:'', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
