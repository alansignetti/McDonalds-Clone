import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredienteI } from '../modelos/ingrediente.interface';
import { ResponseI } from '../modelos/response.interface';
import { ApiService } from '../servicios/api/api.service';

@Component({
  selector: 'app-personalizar-combo',
  templateUrl: './personalizar-combo.component.html',
  styleUrls: ['./personalizar-combo.component.css'],
})
export class PersonalizarComboComponent implements OnInit {
  public detalleHamburguesa: ResponseI[] = [];
  public ingrediente: IngredienteI = {
    nombre: '',
    precio: 0,
    cantidad: 0,
  };

  public pedidosAnteriores: any = [];
  public pedidoAnterior: any;

  public localPedidoDetalle: any;
  public localCarrito: any;
  public hamburguesa!: ResponseI;
  public precioTotalIngredientes: number = 0;
  public arrCarrito: any = [];

  constructor(private route: ActivatedRoute, private _apiService: ApiService) {
    this.getParam();
    this.localPedidoDetalle = localStorage.getItem('pedido-detalle');
  }

  ngOnInit(): void {}

  private getParam() {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.getDataHamburguesa(params.variable);
    });
  }
  //Obtenemos los detalles de la hamburguesa en base a su Id.
  private getDataHamburguesa(id: any): void {
    this._apiService.getDataHamburguesa(id).subscribe((res: any) => {
      this.hamburguesa = res; // guardo la hamburguesa
    });
  }

  public incrementarIngrediente(
    nombre: string,
    precio: number,
    cantidad: number
  ) {
    const txt = document.getElementById(nombre);
    var numero = Number(txt?.textContent);
    if (numero < 4) {
      numero = Number(txt?.textContent) + 1;
      this.precioTotalIngredientes += precio;
      console.log(this.precioTotalIngredientes);
    }
    if (txt?.textContent != undefined) {
      txt.textContent = String(numero);
    }
  }

  public decrementarIngrediente(
    precio: number,
    cantidad: number,
    nombre?: any
  ) {
    const txt = document.getElementById(nombre);
    var numero = Number(txt?.textContent);
    if (numero > cantidad) {
      numero = Number(txt?.textContent) - 1;
      this.precioTotalIngredientes -= precio;
      console.log(this.precioTotalIngredientes);
    }
    if (txt?.textContent != undefined) {
      txt.textContent = String(numero);
    }
  }

  public guardarLocalStorage() {
    const pedido = JSON.parse(this.localPedidoDetalle); //obtengo pedido actual
    this.localCarrito = localStorage.getItem('carrito'); // obtengo carrito de localstorage
    const carrito = JSON.parse(this.localCarrito); // lo convierto a array
    this.arrCarrito = [];

    //recorro el carrito guardado y lo sumo al pedido actual
    if (carrito?.length > 0) {
      for (let c of carrito) {
        this.arrCarrito.push(c);
      }
    }
    this.precioTotalIngredientes += pedido?.precioTotal;
    pedido.precioTotal = this.precioTotalIngredientes;
    this.arrCarrito.push(pedido); // carrito nuevo, le cargo el pedido actual
    this.precioTotalIngredientes = 0;
    // console.log(this.arrCarrito);

    localStorage.setItem('carrito', JSON.stringify(this.arrCarrito));
  }
}
