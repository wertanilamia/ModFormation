import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanformationServiceService {

  constructor(private http:HttpClient) { }
  getPlanFormation(): Observable<any> {
    return this.http.get("http://localhost:8080/plans")
  }
}
