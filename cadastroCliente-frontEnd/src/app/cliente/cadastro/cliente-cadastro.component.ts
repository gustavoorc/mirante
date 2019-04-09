import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from 'src/app/cliente.service';
import { EnderecoService } from 'src/app/endereco.service';
import { Endereco } from 'src/app/endereco';
import {SelectItem} from 'primeng/api';
import { Telefone } from 'src/app/telefone';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Email } from 'src/app/email';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['../cliente.component.css']
})
export class ClienteCadastroComponent implements OnInit {
 
  public cliente:Cliente = new Cliente()
  public telefones:Telefone  = new Telefone()
  public emails:Email = new Email()

  tipoTelefone: SelectItem[];

  constructor(private clienteService:ClienteService, private enderecoService: EnderecoService, private route:Router) {
    
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
        this.route.navigate(
          ["/cliente"]
        )
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
    this.telefones = new Telefone()
  }

  public removerTelefone(obj: Telefone){
    let idx = this.cliente.telefone.indexOf(obj);
    this.cliente.telefone.splice(idx,1)
  }

  public montaEmail(){
    this.cliente.email.push(this.emails);
    this.emails = new Email()
  }

  public removerEmail(obj: Email){
    let idx = this.cliente.email.indexOf(obj)
    this.cliente.email.splice(idx, 1)
  }
}
