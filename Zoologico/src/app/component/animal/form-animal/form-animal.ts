import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-form-animal',
  imports: [FormsModule],
  templateUrl: './form-animal.html',
  styleUrl: './form-animal.css',
})

export class FormAnimal implements OnInit {
id:string='';
id_especie:string='';
sexo:string='';
nacimiento:string='';
pais:string='';
id_zoologico:string='';
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
'id_especie':this.id_especie,
'sexo':this.sexo,
'nacimiento':this.nacimiento,
'pais':this.pais,
'id_zoologico':this.id_zoologico,
};
this.ApiService.guardarAnimal (datos).subscribe({
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