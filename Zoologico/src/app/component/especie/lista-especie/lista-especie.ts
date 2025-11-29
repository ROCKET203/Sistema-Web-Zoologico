import { Component, OnInit } from '@angular/core';
import { FormEspecie } from '../form-especie/form-especie';
import { Menu } from '../../menu/menu';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-lista-especie',
  imports: [FormEspecie,ListaEspecie,Menu],
  templateUrl: './lista-especie.html',
  styleUrl: './lista-especie.css',
})
export class ListaEspecie implements OnInit  {

  data:any;
  constructor(private ApiService: ApiServiceTs){};
  ngOnInit(): void {
  this.cargar();
  }
  cargar(){
  this.ApiService.getespecies().subscribe({
  next: (result) => {
  console.log(result);
  this.data=result;
  },
  error: (err) => {
  console.log(err);
  }
  });
  }
 
}
