import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from './endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http:HttpClient) { }

  public url =""
  

  public setarCep(cep) :Observable<any> {
    this.url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get<Endereco>(this.url)
  }


}
