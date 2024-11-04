import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculoComponent } from './components/listar-vehiculos/listar-vehiculos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListarVehiculoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListarVehiculoComponent
  ]
})
export class VehiculosModule { }
