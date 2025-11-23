import { Component, OnInit } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-lista-animal',
  imports: [],
  templateUrl: './lista-animal.html',
  styleUrl: './lista-animal.css',
})
export class ListaAnimal implements OnInit {
  data: any;
  constructor(private ApiService: ApiServiceTs) {}
  ngOnInit(): void {
    this.cargar();
  }
  cargar() {
    this.ApiService.getanimales().subscribe({
      next: (result) => {
        console.log(result);
        this.data = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
