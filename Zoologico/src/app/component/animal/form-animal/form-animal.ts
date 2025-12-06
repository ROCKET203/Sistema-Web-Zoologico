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
idespecie:string='';
sexo:string='';
nacimiento:string='';
pais:string='';
idzoologico:string='';
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
'identificacion':this.id,
'idespecie':this.idespecie,
'sexo':this.sexo,
'nacimiento':this.nacimiento,
'pais':this.pais,
'idzoologico':this.idzoologico,
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