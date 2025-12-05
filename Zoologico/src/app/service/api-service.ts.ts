import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceTs {

  private apiUrl="http://localhost/backend/public/zoo/";

  constructor(private http: HttpClient){}



   getZoologicos():Observable<any>{
return this.http.get(this.apiUrl + "lista").pipe(res=>res);
}





  getanimales():Observable<any>{

    
return this.http.get(this.apiUrl + "animales").pipe(res=>res);
}


  getespecies():Observable<any>{

    
return this.http.get(this.apiUrl + "especies").pipe(res=>res);
}


guardarAnimal(datos: any): Observable<any>{
return this.http.post(this.apiUrl + "/nuevo_animal",datos).pipe(res=>res);
};


guardarEspecie(datos: any): Observable<any>{
return this.http.post(this.apiUrl + "/nuevo_especie",datos).pipe(res=>res);
};


guardarZoologico(datos: any): Observable<any>{
return this.http.post(this.apiUrl + "/nuevo_zoologico",datos).pipe(res=>res);
};



 gettraslado():Observable<any>{
return this.http.get(this.apiUrl + "traslado").pipe(res=>res);
}

}


