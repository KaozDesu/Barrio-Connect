import { Component } from '@angular/core';
import { Empresa } from '../empresa.interface';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-registro-empresa',
  template: `...`, // El template que te di antes
})
export class RegistroEmpresaComponent {
  nuevaEmpresa: Empresa = { id: '', nombre: '', lugar: '', horario: { apertura: '', cierre: '' }, productos: [] };
  nuevoProducto: string = '';
  constructor(private empresaService: EmpresaService) {}

  agregarProducto() {
    if (this.nuevoProducto) {
      this.nuevaEmpresa.productos.push({ nombre: this.nuevoProducto, cantidad: 'pocos' });
      this.nuevoProducto = '';
    }
  }

  registrarEmpresa() {
    this.nuevaEmpresa.id = Date.now().toString(); // Temporal, usa un ID único
    this.empresaService.guardarEmpresa(this.nuevaEmpresa).then(() => {
      console.log('Empresa registrada');
      this.nuevaEmpresa = { id: '', nombre: '', lugar: '', horario: { apertura: '', cierre: '' }, productos: [] };
    });
  }
}