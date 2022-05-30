import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseI } from '../modelos/response.interface';
import { ApiService } from '../servicios/api/api.service';

@Component({
  selector: 'app-detalle-home',
  templateUrl: './detalle-home.component.html',
  styleUrls: ['./detalle-home.component.css'],
})
export class DetalleHomeComponent implements OnInit {
  public hamburguesa: ResponseI | undefined;
  private id: number;
  constructor(private _apiService: ApiService, private route: ActivatedRoute) {
    // el activatedRoute detecta la url en la que estamos actualmente, osea en la detalle oferta y de ahi tomo el id
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getDetalle();
  }

  // obtengo solo la hamburguesa del id
  getDetalle() {
    this._apiService.getDataHamburguesa(this.id).subscribe((res) => {
      this.hamburguesa = res;
    });
  }
}
