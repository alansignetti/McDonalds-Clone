import { ResponseI } from './../../modelos/response.interface';
import { ApiService } from './../../servicios/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ReadKeyExpr } from '@angular/compiler';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  listaDePromociones: ResponseI[] = [];
  listaDeMcCombos: ResponseI[] = [];
  listaDeMcOfertas: ResponseI[] = [];
  constructor(private _apiService:ApiService) { }

  ngOnInit(): void {
    this.getHamburguesas();
  }

  getHamburguesas(){
    this._apiService.getHamburguesas().subscribe(res =>{
      for (let i of res) {
        switch (i.tipo){
          case 'Promociones':
            this.listaDePromociones.push(i);
            break;
          case 'McCombos':
            this.listaDeMcCombos.push(i);
            break;
          case 'McOfertas':
            this.listaDeMcOfertas.push(i);
            break;
        }
      }
    })
  }

}
