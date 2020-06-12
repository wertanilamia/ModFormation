import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { commande } from '../commande';


@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {

  constructor(private http:HttpClient) { }
  getAllCommande(): Observable<any>{
    return this.http.get("http://localhost:8080/cherchercommande?McCom=&size=5&page=0");
  }
addcommande(com:commande){
  return this.http.post<any>("http://localhost:8080/scommande",com);
}
deletecommande(idcom:number){
  return this.http.delete<any>("http://localhost:8080/commandes/"+idcom);
}
cherchercommande(mcCom:String,page:number,size:number){
  return this.http.get("http://localhost:8080/cherchercommande?McCom="+mcCom+"&size="+size+"&page="+page);
}
getOneCommande(idcom:number){
return this.http.get("http://localhost:8080/commandes/"+idcom);
}
updateCommande(commande:commande){
  console.log(commande);
return this.http.put("http://localhost:8080/commande/"+commande.idcom,commande)
}
  }

