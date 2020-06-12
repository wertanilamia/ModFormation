import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url=("http://localhost:8080/utilisateurs");
private updateUrl=("http://localhost:8080/utilisateurs/update");

  constructor(public http:HttpClient) {}
 
  getAllusers( ):Observable<any>{
    return this.http.get("http://localhost:8080/chercherUtilisateur?mc=a&size=5&page=0"); 
  }
  getOneUser(id:number){
    return this.http.get<any>("http://localhost:8080/utilisateurs/"+id);
  }
  SearchUser(mcSearch:String,page:number,size:number){
return this.http.get("http://localhost:8080/chercherUtilisateur?mc="+mcSearch+"&size="+size+"&page="+page);
  }

saveuser(user:user){
  return this.http.post<any>(this.url, user);
}


updateuser(user: user):Observable<any>{
  return this.http.put("http://localhost:8080/utilisateurs/3",user);
}

deleteUser(id:number){
  return this.http.delete<any>("http://localhost:8080/utilisateurs/"+id);
}

}

