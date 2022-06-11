import { isNull } from '@angular/compiler/src/output/output_ast';
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
  public carritoVacio: boolean = true;
  constructor() {
    this.getCarrito();
  }

  ngOnInit(): void {
    this.calcularTotal();
  }

  public getCarrito() {
    this.c = localStorage.getItem('carrito');
    const cart = JSON.parse(this.c);
    this.carrito.push(JSON.parse(this.c));
    if (cart != null) {
      this.carrito = this.carrito[0];
      this.carritoVacio = false; // el carrito tiene algo
    }
  }

  public calcularTotal() {
    const cart = JSON.parse(this.c);
    if (cart != null) {
      for (let i of this.carrito) {
        this.total += i.precioTotal;
      }
    }
  }

  public vaciarCarrito() {
    localStorage.clear();
    this.carritoVacio = true; //vacio el carrito
    this.getCarrito();
  }
}
