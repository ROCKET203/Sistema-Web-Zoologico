import { Component, OnInit } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-lista-zoologico',
  imports: [],
  templateUrl: './lista-zoologico.html',
  styleUrl: './lista-zoologico.css',
})
export class ListaZoologico implements OnInit {

data:any;
constructor(private ApiService: ApiServiceTs){};
ngOnInit(): void {
this.cargar();
}
cargar(){
this.ApiService.getZoologicos().subscribe({
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

