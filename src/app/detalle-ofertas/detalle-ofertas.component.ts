import { ApiService } from 'src/app/servicios/api/api.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-ofertas',
  templateUrl: './detalle-ofertas.component.html',
  styleUrls: ['./detalle-ofertas.component.css']
})
export class DetalleOfertasComponent implements OnInit {

  @ViewChild('asContentDescripcion') descripcion!: ElementRef;
  @ViewChild('asButton') button!: ElementRef;

  public respuesta: any;

  constructor(private route: ActivatedRoute, private _apiService: ApiService, private renderer2: Renderer2) { }

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
  capture(): void{
    const content = this.descripcion.nativeElement;
    const clasesContent = content.classList;
    const clasesButton = this.button.nativeElement.classList;

    if(content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.overflow = "hidden";
    }else{
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.overflow = "initial";
    }
    if(clasesButton[1] == 'active'){
      this.renderer2.removeClass(this.button.nativeElement, 'active');
    } else{
      this.renderer2.addClass(this.button.nativeElement, 'active');
    }
  }
}
