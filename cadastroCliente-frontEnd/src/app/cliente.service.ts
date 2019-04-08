import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  public getCliente(): Cliente{

    let  cliente = new Cliente()
    cliente.nome = "Gustavo"
    cliente.cpf = "01729858112"

    return cliente
  }
}
