import { Component, OnInit } from '@angular/core';
import { ResponseI } from './../../modelos/response.interface';
@Component({
  selector: 'app-mas',
  templateUrl: './mas.component.html',
  styleUrls: ['./mas.component.css'],
})
export class MasComponent implements OnInit {
  public c: any;
  public carrito: any = [];
  public total: number = 0;
  constructor() {
    this.getCarrito();
  }

  ngOnInit(): void {
    this.calcularTotal();
  }

  public getCarrito() {
    this.c = localStorage.getItem('carrito');
    this.carrito.push(JSON.parse(this.c));
    this.carrito = this.carrito[0];

    console.log(this.carrito);
  }

  public calcularTotal() {
    for (let i of this.carrito) {
      this.total += i.precioTotal;
    }
  }
}
