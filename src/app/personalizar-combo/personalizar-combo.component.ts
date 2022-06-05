import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredienteI } from '../modelos/ingrediente.interface';
import { ResponseI } from '../modelos/response.interface';
import { ApiService } from '../servicios/api/api.service';

@Component({
  selector: 'app-personalizar-combo',
  templateUrl: './personalizar-combo.component.html',
  styleUrls: ['./personalizar-combo.component.css']
})
export class PersonalizarComboComponent implements OnInit {

  public detalleHamburguesa: ResponseI[] = [];
  public ingrediente: IngredienteI = {
    nombre: '',
    precio: 0,
    cantidad: 0
  };
  public listaDeingredientesNuevos: string[]= [];

  constructor(private route: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getParam();
  }

  private getParam() {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      console.log(params.variable);
      this.getDataHamburguesa(params.variable);
    })
  }
  //Obtenemos los detalles de la hamburguesa en base a su Id.
  private getDataHamburguesa(id: any): void {
    this._apiService.getDataHamburguesa(id).subscribe((res: any) => {
      this.detalleHamburguesa.push(res);
    })
  }

  public incrementarIngrediente(nombre: string) {
    const txt = document.getElementById(nombre);
    var numero = Number(txt?.textContent);
    if (numero < 4) {
      numero = Number(txt?.textContent) + 1;
    }
    if (txt?.textContent != undefined) {
      txt.textContent = String(numero);
    }
    console.log("Aumenta en uno");
  }

  public decrementarIngrediente(nombre: string) {
    const txt = document.getElementById(nombre);
    var numero = Number(txt?.textContent);
    if (numero > 0) {
      numero = Number(txt?.textContent) - 1;
    }
    if (txt?.textContent != undefined) {
      txt.textContent = String(numero);
    }
    console.log(" Decrementa en uno");
  }

  public guardarIngredientes() {
    //Guardamos los ingredientes personalizados por el usuario.
    for (let h of this.detalleHamburguesa) {
      for (let i of h.ingredientes) {
        if (i.nombre == 'Carne' || i.nombre == 'Tomate' || i.nombre == 'Bacon' || i.nombre == 'Bacon Triturado' ||
          i.nombre == 'Queso-Cheddar') {
          this.ingrediente = {
            nombre: i.nombre,
            precio: i.precio,
            cantidad: Number(document.getElementById(i.nombre)?.textContent)
          }
          this.listaDeingredientesNuevos.push(JSON.stringify(this.ingrediente));
          this.guardarLocalStorage(this.listaDeingredientesNuevos);
        }
      }
    }
    
    //Mostrar lista de ingredientes cargados
    /*for(let ing of this.listaDeingredientesNuevos ){
      console.log(JSON.parse(ing));
    }*/
  }

  public guardarLocalStorage (listaDeDatos:string[]){
    for(let ing of this.listaDeingredientesNuevos ){
      let ingrediente = JSON.parse(ing); 
      localStorage.setItem('listaDeIngredientes',JSON.stringify(listaDeDatos));
    }
    
    /*if(localStorage.getItem('listaDeIngredientes') != undefined){
      let listaAux = JSON.parse(localStorage.getItem('listaDeIngredientes'));
    } */
    
  }


}
