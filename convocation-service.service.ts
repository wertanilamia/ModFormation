import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { convocation } from '../convocation';

@Injectable({
  providedIn: 'root'
})
export class ConvocationServiceService {

  constructor(private http:  HttpClient) { }
  getAllConvocation(): Observable<any>{
    return this.http.get("http://localhost:8080/chercherconvocation?McConv=&size=5&page=0");
  }
  getConvocation(idc:number): Observable<any>{
return this.http.get("http://localhost:8080/convocations/"+idc)
  }
  deleteC(idc:number){
  return this.http.delete<any>("http://localhost:8080/convocations/"+idc);
}
chercherC(mcC:String,page:number,sizeC:number){
  return this.http.get("http://localhost:8080/chercherconvocation?McConv="+mcC+"&size="+sizeC+"&page="+page);
}
addConvocation(convocation:convocation){
  return this.http.post<any>("http://localhost:8080/convocations",convocation);
}

updateConvocation(conv:convocation): Observable<any>{
  return this.http.put("http://localhost:8080/convocations/1",conv);
}
}
