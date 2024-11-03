import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculoComponent } from './components/listar-vehiculos/listar-vehiculos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListarVehiculoComponent // Declaración correcta del componente
  ],
  imports: [
    CommonModule,
    HttpClientModule // Importar módulos necesarios
  ],
  exports: [
    ListarVehiculoComponent // Exportación del componente
  ]
})
export class VehiculosModule { }
