import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVehiculoComponent } from './listar-vehiculos.component';
import { VehiculoService } from '../../services/vehiculo.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Vehiculo } from '../../vehiculo.model';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;
  let vehiculoService: VehiculoService;

  const mockVehiculos: Vehiculo[] = [
    new Vehiculo(1, 'Renault', 'Kangoo', 'VU Express', 2017, 93272, 'Blanco', 'url1.jpg'),
    new Vehiculo(2, 'Chevrolet', 'Spark', 'Life', 2018, 55926, 'Plata', 'url2.jpg'),
    new Vehiculo(3, 'Nissan', 'March', 'Active Plus', 2019, 31298, 'Plata', 'url3.jpg')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVehiculoComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        {
          provide: VehiculoService,
          useValue: {
            getVehiculos: () => of(mockVehiculos)
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;
    vehiculoService = TestBed.inject(VehiculoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with three rows plus the header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tableRows = compiled.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(3);
  });
});
