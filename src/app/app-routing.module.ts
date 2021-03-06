import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { MasComponent } from './components/mas/mas.component';
import { MisCuponesComponent } from './components/mis-cupones/mis-cupones.component';
import { DetalleOfertasComponent } from './detalle-ofertas/detalle-ofertas.component';
import { PedidosDetalleComponent } from './components/pedidos-detalle/pedidos-detalle.component';
import { PersonalizarComboComponent } from './personalizar-combo/personalizar-combo.component';
import { DetalleHomeComponent } from './detalle-home/detalle-home.component';
import { SeccionPagosComponent } from './seccion-pagos/seccion-pagos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'mis-cupones', component: MisCuponesComponent },
  { path: 'carrito', component: MasComponent },
  { path: 'detalle-oferta/:variable', component: DetalleOfertasComponent },
  { path: 'pedidos-detalle/:variable', component: PedidosDetalleComponent },
  {
    path: 'personalizar-combo/:variable',
    component: PersonalizarComboComponent,
  },
  { path: 'detalle-home/:id', component: DetalleHomeComponent },
  { path: 'formas-pago', component: SeccionPagosComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }), //top
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
