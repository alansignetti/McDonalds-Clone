import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-pagos',
  templateUrl: './seccion-pagos.component.html',
  styleUrls: ['./seccion-pagos.component.css']
})
export class SeccionPagosComponent implements OnInit {
  public dato: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  public mostrar(dato: any) {
    this.dato = dato;
    if (dato!= undefined) {
      // document.getElementById("nombre").style.display = "block";
      // document.getElementById("apellidos").style.display = "none";
      // document.getElementById("edad").style.display = "none";

      // const txt = document.getElementById("item");
      // var numero = Number(txt?.textContent)+1;
      // if(txt?.textContent != undefined){
      //   txt.textContent = String(numero);
      // }
      console.log(dato);
  }
}

}
