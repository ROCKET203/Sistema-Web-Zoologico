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


}
