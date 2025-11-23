import { Component } from '@angular/core';
import { ListaZoologico } from "../../component/zoologico/lista-zoologico/lista-zoologico";
import { FormZoologico } from "../../component/zoologico/form-zoologico/form-zoologico";
import { Menu } from '../../component/menu/menu';

@Component({
  selector: 'app-zoologico',
  imports: [ListaZoologico, FormZoologico,Menu],
  templateUrl: './zoologico.html',
  styleUrl: './zoologico.css',
})
export class Zoologico {
   lista: Boolean = true;
  mostrar() {
    if (this.lista) {
      this.lista = false;
    } else {
      this.lista = true;
    }
  }

}
