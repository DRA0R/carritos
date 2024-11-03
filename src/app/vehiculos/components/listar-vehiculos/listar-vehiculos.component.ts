import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from '../../vehiculo.model';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculoComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  conteoMarcas: { [marca: string]: number } = {};

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe(data => {
      this.vehiculos = data.map(item => new Vehiculo(
        item.id,
        item.marca,
        item.linea,
        item.referencia,
        item.modelo,
        item.kilometraje,
        item.color,
        item.imagen
      ));
      this.calcularConteoMarcas();
    });
  }

  calcularConteoMarcas(): void {
    this.conteoMarcas = this.vehiculos.reduce((conteo: { [marca: string]: number }, vehiculo: Vehiculo) => {
      conteo[vehiculo.marca] = (conteo[vehiculo.marca] || 0) + 1;
      return conteo;
    }, {});
  }
}
