import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { direction } from '../direction';

@Injectable({
  providedIn: 'root'
})
export class DirectionserviceService {

  constructor( public http: HttpClient) { }
  getAllDirection(): Observable<any>{
    return this.http.get("http://localhost:8080/chercherdirection?McD=&size=7&page=0")
  }
  saveDirection(direct:direction){
    return this.http.post<any>("http://localhost:8080/direction",direct)
  }
}
