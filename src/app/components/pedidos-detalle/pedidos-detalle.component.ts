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

  incrementar(){
    const txt = document.getElementById("item");
    var numero = Number(txt?.textContent)+1;
    if(txt?.textContent != undefined){
      txt.textContent = String(numero);
    }
    console.log("Aumenta en uno");
  }

  decrementar(){
    const txt = document.getElementById("item");
    var numero = Number(txt?.textContent);
    if(numero>0){
      numero = Number(txt?.textContent)-1;
    }
    if(txt?.textContent != undefined){
      txt.textContent = String(numero);
    }
    console.log(" Decrementa en uno");
  }

  ChangedCheckPapasFritas(event:any){
    const papas = document.getElementById("papas-fritas")?.classList.toggle("disabled")
    console.log("Checked:" + event.target.checked);
  
    
  }
}
