import { Observable } from 'rxjs';
import { ResponseI } from './../../modelos/response.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseOfertaI } from 'src/app/modelos/responseOferta.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  _url:string = "https://62464e83e3450d61b0fcee4a.mockapi.io/proyecto-software/";
  constructor(private http:HttpClient) { }

  getHamburguesas():Observable<ResponseI[]>{
    let url = this._url +'hamburguesa';
    return this.http.get<ResponseI[]>(url);
  }

  public getOfertas():Observable<ResponseOfertaI[]>{
    let url = this._url +'oferta';
    return this.http.get<ResponseOfertaI[]>(url);
  }

  public getOferta(id: any):Observable<ResponseOfertaI[]>{
    let url = this._url +'oferta/'+id;
    return this.http.get<ResponseOfertaI[]>(url);
  }
  

}
