import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { fiche } from '../fiche';

@Injectable({
  providedIn: 'root'
})
export class FicheBesoinsService {

  constructor(private http:  HttpClient) { }
  getAllFiche(): Observable<any>{
    return this.http.get("http://localhost:8080/chercherfiche?mc=A&size=5&page=0");
  }

  SearchFiche(motCle:String,page:number,size:number): Observable<any>{
    return this.http.get("http://localhost:8080/chercherfiche?mc="+motCle+"&size="+size+"&page="+page);
  }

  deleteFiche(id:number){
    return this.http.delete<any>("http://localhost:8080/fiches/"+id);
  }
 getfiche(id:number): Observable<any>{
   return this.http.get("http://localhost:8080/fiches/"+id);
 }
 updateFiche(fiche:fiche): Observable<any>{
return this.http.put("http://localhost:8080/fiches/3",fiche);
 }
 addFiche(fiche:fiche){
   return this.http.post<any>("http://localhost:8080/fiches",fiche);
 }


 
  
}
