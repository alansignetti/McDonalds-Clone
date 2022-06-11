import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { MisCuponesComponent } from './components/mis-cupones/mis-cupones.component';
import { MasComponent } from './components/mas/mas.component';
import { DetalleOfertasComponent } from './detalle-ofertas/detalle-ofertas.component';
import { PedidosDetalleComponent } from './components/pedidos-detalle/pedidos-detalle.component';
import { DetalleHomeComponent } from './detalle-home/detalle-home.component';
import { PersonalizarComboComponent } from './personalizar-combo/personalizar-combo.component';
import { SeccionPagosComponent } from './seccion-pagos/seccion-pagos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    PedidosComponent,
    OfertasComponent,
    MisCuponesComponent,
    MasComponent,
    DetalleOfertasComponent,
    PedidosDetalleComponent,
    DetalleHomeComponent,
    PersonalizarComboComponent,
    SeccionPagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
