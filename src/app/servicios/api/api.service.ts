import { Observable } from 'rxjs';
import { ResponseI } from './../../modelos/response.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getDataHamburguesa(id:any):Observable<ResponseI>{
    let url = this._url +'hamburguesa/'+id;
    return this.http.get<ResponseI>(url);
  }

  getDataPromociones(tipo:any):Observable<ResponseI>{
    let url = this._url +'hamburguesa?tipo='+tipo;
    return this.http.get<ResponseI>(url);
  }

}
