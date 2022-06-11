import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../servicios/api/api.service';
import { ResponseI } from './../../modelos/response.interface';

@Component({
  selector: 'app-pedidos-detalle',
  templateUrl: './pedidos-detalle.component.html',
  styleUrls: ['./pedidos-detalle.component.css'],
})
export class PedidosDetalleComponent implements OnInit {
  public hamburguesa!: ResponseI;

  public cantidad: number = 1;
  public precioTotal: number = 0;
  constructor(private route: ActivatedRoute, private _apiService: ApiService) {
    this.getParam();
  }

  ngOnInit(): void {}

  public actualizarPrecioTotal() {
    this.precioTotal = this.hamburguesa.precio * this.cantidad;
  }

  public guardarLocalStorage() {
    //creo variable para guardar en localstorage
    const pedidoDetalle = {
      id: this.hamburguesa.id,
      cantidad: this.cantidad,
      precioTotal: this.precioTotal,
      nombre: this.hamburguesa.nombre,
      imagen: this.hamburguesa.imagen,
    };
    localStorage.setItem('pedido-detalle', JSON.stringify(pedidoDetalle));
  }
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
      this.precioTotal = this.hamburguesa.precio;
    });
  }

  incrementar() {
    const txt = document.getElementById('item');
    var numero = Number(txt?.textContent) + 1;
    if (txt?.textContent != undefined) {
      txt.textContent = String(numero);
    }
    this.cantidad = numero;
    this.actualizarPrecioTotal();
  }

  decrementar() {
    const txt = document.getElementById('item');
    var numero = Number(txt?.textContent);
    if (numero > 1) {
      numero = Number(txt?.textContent) - 1;
    }
    if (txt?.textContent != undefined) {
      txt.textContent = String(numero);
    }
    this.cantidad = numero;
    this.actualizarPrecioTotal();
  }

  ChangedCheckPapasFritas(event: any) {
    const papas = document
      .getElementById('papas-fritas')
      ?.classList.toggle('disabled');
    // console.log('Checked:' + event.target.checked);
  }
}
