import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['../cliente.component.css']
})
export class ClienteCadastroComponent implements OnInit {
 
  public cliente:Cliente = new Cliente()
  constructor() { }

  ngOnInit() {
  
  }

  public salvar(){
console.log(this.cliente);

    alert("deu bom")
  }
}
