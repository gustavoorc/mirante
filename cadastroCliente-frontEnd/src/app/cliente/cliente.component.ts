import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  public clientes:Cliente[]

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getCliente().subscribe(
      response => {
         this.clientes = response 
      },
      error=> {
        alert("erro ao carregar a lista de clientes")
      }
    )
  }

}
