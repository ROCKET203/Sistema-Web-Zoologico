import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-form-especie',
  imports: [FormsModule],
  templateUrl: './form-especie.html',
  styleUrl: './form-especie.css',
})

export class FormEspecie implements OnInit {
id:string='';
nombre_vulgar:string='';
nombre_cientifico:string='';
familia:string='';
estado:string='';
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
'nombre_vulgar':this.nombre_vulgar,
'nombre_cientifico':this.nombre_cientifico,
'familia':this.familia,
'estado':this.estado,
};
this.ApiService.guardarEspecie (datos).subscribe({
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