import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import {ConfirmationService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers:[ConfirmationService]
})
export class ClienteComponent implements OnInit {
  public clientes:Cliente[]

 @Input() public cliente:Cliente

  constructor(private clienteService: ClienteService, private confirmationService:ConfirmationService, private route:Router) { }

  ngOnInit() {
    this.listaClientes()
  }


  public listaClientes(){
    
    this.clienteService.getCliente().subscribe(
      response => {
         this.clientes = response
      },
      error=> {
        alert("erro ao carregar a lista de clientes")
      }
    )
  }
  public deletar(idCliente:String){

    this.confirmationService.confirm({
      message: 'Deseja realmente deletar esse registro ?',
      accept: () => {
        this.clienteService.deletar(idCliente).subscribe(
          Response=> {
            alert("Deletado com sucesso !")
            this.listaClientes()  
          },
          error=>{
            alert("Ocorreu algum erro ao deletar o cliente!")
          }
    
        )
      }
  });

  }

  public retornaCliente(obj: Cliente){
    let idx = this.clientes.indexOf(obj);
    this.cliente = this.clientes[idx]
    console.log(this.cliente)
    this.route.navigate(
      ["/cliente/addCliente"]
    )
  }

}
