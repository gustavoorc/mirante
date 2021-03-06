import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

    private url = "http://localhost:8080/clientes"

    public salvar(cliente:Cliente):Observable<Cliente>{
      return this.http.post<Cliente>(this.url, cliente)
  }
  public getCliente(): Observable<Cliente[]>{
       return this.http.get<Cliente[]>(this.url)
  }

  public deletar(idCliente:String):Observable<any>{
    return this.http.delete(this.url  + "/" + idCliente)
  }

 
}
