import { Component } from '@angular/core';
import { Menu } from '../../component/menu/menu';
import { ListaEspecie } from '../../component/especie/lista-especie/lista-especie';
import { FormEspecie } from '../../component/especie/form-especie/form-especie';

@Component({
  selector: 'app-especie',
  imports: [Menu,ListaEspecie,FormEspecie],
  templateUrl: './especie.html',
  styleUrl: './especie.css',
})
export class Especie {
   lista: Boolean = true;
  mostrar() {
    if (this.lista) {
      this.lista = false;
    } else {
      this.lista = true;
    }
  }

}


