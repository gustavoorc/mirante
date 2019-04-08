import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from 'src/app/cliente.service';
import { EnderecoService } from 'src/app/endereco.service';
import { Endereco } from 'src/app/endereco';
import {SelectItem} from 'primeng/api';
import { Telefone } from 'src/app/telefone';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['../cliente.component.css']
})
export class ClienteCadastroComponent implements OnInit {
 
  public cliente:Cliente = new Cliente()
  public telefones:Telefone  = new Telefone()

  tipoTelefone: SelectItem[];

  constructor(private clienteService:ClienteService, private enderecoService: EnderecoService) {
    
  }

  ngOnInit() {
    this.tipoTelefone = [
      {label:'Tipo Telefone', value:null},
      {label:'Celular', value:'Celular'},
      {label:'Residencial', value:'Residencial'},
      {label:'Comercial', value: 'Comercial'},
  ];
  }

  public salvar(){
    this.clienteService.salvar(this.cliente).subscribe(
      responde => {
        alert("salvo com sucesso !")
      },
      erro => {
        alert("aconteceu algo inesperado, contato o administrador")
      }
    )
  }

  public retornaEndereco(){
    this.enderecoService.setarCep(this.cliente.endereco.cep).subscribe(
    response => {
      this.cliente.endereco =response
      this.cliente.endereco.cidade = response.localidade
      console.log(response)
   },
   error=> {
     alert("Cep não encontrado !")
   }
 )
  }

  public montaTelefones(){
    this.cliente.telefone.push(this.telefones);
    console.log(this.telefones)
  }

  public setTipoTelefone(){
    console.log(this.telefones)
  }

}
