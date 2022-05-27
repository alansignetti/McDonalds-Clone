import { ApiService } from 'src/app/servicios/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-ofertas',
  templateUrl: './detalle-ofertas.component.html',
  styleUrls: ['./detalle-ofertas.component.css']
})
export class DetalleOfertasComponent implements OnInit {

  public respuesta: any;

  constructor(private route: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap: any) =>{
      const {params} = paramMap;

      this.cargarDetalleOferta(params.variable);
    })
  }

  cargarDetalleOferta(id: string): void{
    this._apiService.getOferta(id).subscribe((respuesta: any) =>{
      this.respuesta = respuesta;
    });
  }

}
