import { Component, OnInit } from '@angular/core';
import { ResponseOfertaI } from 'src/app/modelos/responseOferta.interface';
import { ApiService } from './../../servicios/api/api.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  listOfertasSeccion1: ResponseOfertaI[] = [];
  listOfertasSeccion2: ResponseOfertaI[] = [];
  listOfertasSeccion3: ResponseOfertaI[] = [];
  listOfertasSeccion4: ResponseOfertaI[] = [];
  listOfertasSeccion5: ResponseOfertaI[] = [];
  listOfertasSeccion6: ResponseOfertaI[] = [];
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getOfertas();
  }
  getOfertas() {
    this._apiService.getOfertas().subscribe(res => {

      res.forEach(oferta => {
        switch (oferta.seccion) {
          case 1: {
            this.listOfertasSeccion1.push(oferta);
            break;
          }
          case 2: {
            this.listOfertasSeccion2.push(oferta);
            break;
          }
          case 3: {
            this.listOfertasSeccion3.push(oferta);
            break;
          }
          case 4: {
            this.listOfertasSeccion4.push(oferta);
            break;
          }
          case 5: {
            this.listOfertasSeccion5.push(oferta);
            break;
          }
          case 6: {
            this.listOfertasSeccion6.push(oferta);
            break;
          }
        }
      });
    });


  }
}
