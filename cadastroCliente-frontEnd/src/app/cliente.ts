import { Endereco } from './endereco';
import { Telefone } from './telefone';
import { Email } from './email';

export class Cliente {

    public idCliente:Number
    public nome:String
    public cpf:String
    public endereco = new Endereco()
    public telefone: Telefone[]
    public email:Email[]

    constructor(){
        this.nome = ""
        this.cpf  = " "
        this.telefone = []
        this.email = []
        
    }
}
