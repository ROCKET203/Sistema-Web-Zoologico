import { Component } from '@angular/core';
import { ListaAnimal } from '../../component/animal/lista-animal/lista-animal';
import { FormAnimal } from '../../component/animal/form-animal/form-animal';
import { Menu } from '../../component/menu/menu';

@Component({
  selector: 'app-animal',
  imports: [ListaAnimal, FormAnimal,Menu],
  templateUrl: './animal.html',
  styleUrl: './animal.css',
})
export class Animal {
  lista: Boolean = true;
  mostrar() {
    if (this.lista) {
      this.lista = false;
    } else {
      this.lista = true;
    }
  }
}
