import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../servicios/api/api.service';
import { ResponseI } from './../../modelos/response.interface';

@Component({
  selector: 'app-pedidos-detalle',
  templateUrl: './pedidos-detalle.component.html',
  styleUrls: ['./pedidos-detalle.component.css']
})
export class PedidosDetalleComponent implements OnInit {

  detalleHamburguesa: ResponseI[] = [];

  constructor(private route:ActivatedRoute,private _apiService:ApiService) { }

  ngOnInit(): void {
    
    this.getParam();
    
  }

  private getParam(){
    this.route.paramMap.subscribe((paramMap:any) => {
      const{params} = paramMap;
      console.log(params.variable); 
      this.getDataHamburguesa(params.variable);
    })
  }
  //Obtenemos los detalles de la hamburguesa en base a su Id.
  private getDataHamburguesa(id:any): void{
    this._apiService.getDataHamburguesa(id).subscribe((res:any) =>{
      this.detalleHamburguesa.push(res);

      // REVISAR LOS DATOS DEL FRONTEND
      console.log(this.detalleHamburguesa);
    })
  }
}
