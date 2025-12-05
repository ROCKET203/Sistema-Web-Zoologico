import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-form-zoologico',
  imports: [FormsModule],
  templateUrl: './form-zoologico.html',
  styleUrls: ['./form-zoologico.css'],
})

export class FormZoologico implements OnInit {




id:string='';
nombre:string='';
tamano:string='';
ciudad:string='';
pais:string='';
presupuesto:string='';
base:number=0;
bases:any[]=[];
codigo:string=''

constructor(private ApiService: ApiServiceTs){};
ngOnInit(): void {
this.cargarBases();
}
cargarBases(){
this.ApiService.getanimales().subscribe({
next: (resul: any) => { // <-- Añadir : any
  console.log(resul);
  this.bases = resul;
},
error: (err: any) => {
  console.log(err);
}
});
}
guardar(){
let datos={
'id':this.id,
'nombre':this.nombre,
'tamano':this.tamano,
'ciudad':this.ciudad,
'pais':this.pais,
'presupuesto':this.presupuesto,
};
this.ApiService.guardarZoologico (datos).subscribe({
next: (result) => {
console.log(result);
this.bases=result;
},
error: (err) => {
console.log(err);
}
});
}



}