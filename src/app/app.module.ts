import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VehiculosModule } from './vehiculos/vehiculos.module'; // Importar el módulo de vehículos
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VehiculosModule // Importar el módulo que contiene ListarVehiculoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
