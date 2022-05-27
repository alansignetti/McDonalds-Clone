import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { MasComponent } from './components/mas/mas.component';
import { MisCuponesComponent } from './components/mis-cupones/mis-cupones.component';
import { DetalleOfertasComponent } from './detalle-ofertas/detalle-ofertas.component';


const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'mis-cupones', component: MisCuponesComponent},
  {path: 'mas', component: MasComponent},
  {path: 'detalle-oferta/:variable', component:  DetalleOfertasComponent}


  // {path: '**', component: ErrorComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
