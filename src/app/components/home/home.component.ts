import { ResponseI } from './../../modelos/response.interface';
import { ApiService } from './../../servicios/api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public nombre: string = "";
  // public listaHamburguesas=;
  listaHamburguesas: ResponseI[] = [];
  constructor(private _apiService:ApiService) { }

  ngOnInit(): void {
    this.getHamburguesas();
  }

  getHamburguesas(){
    this._apiService.getHamburguesas().subscribe(res =>{
      // this.nombre = res.nombre;
      this.listaHamburguesas = res;
      // console.log(this.listaHamburguesas);
    })
  }
}
