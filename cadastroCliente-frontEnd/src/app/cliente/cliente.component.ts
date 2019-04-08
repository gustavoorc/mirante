import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  public cliente:Cliente

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = this.clienteService.getCliente()
  }

}
