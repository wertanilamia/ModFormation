import { Component, OnInit } from '@angular/core';

import { commande } from '../commande';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CommandeServiceService } from '../service/commande-service.service';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {
  listcommandes:any;
  cm:commande;
  mcCom:String="";
  currentpage:number=0;
  size:number=5;
  pages:Array<number>;
    constructor(private commandeservice:CommandeServiceService,
              private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
this.commandeservice.getAllCommande().subscribe(data=>{
  this.listcommandes=data;
},err=>{
  console.log(err);
})
  }

  onDeleteCommande(cm:commande){
    this.commandeservice.deletecommande(cm.idcom).subscribe(data=>{
      console.log(data);
    this.listcommandes.content.splice(
    this.listcommandes.content.indexOf(cm,1))
    this.toastr.error('Commande supprimé');
    },err=>{
      console.log(err);
    })
  }
  onEditCommande(idcom:number){
  this.router.navigate(['/updatecommande',idcom]);
  }
  doSearch(){
    this.commandeservice.cherchercommande(this.mcCom,this.currentpage,this.size).subscribe((res:any)=>{
      this.listcommandes=res;
      this.pages=new Array(res.totalPages)
    },err=>{
      console.log(err);
    })
  }
  ChercherCommande(){
this.doSearch();
  }
  nextPagecm(i:number){
this.currentpage=i;
this.doSearch();
  }
}
