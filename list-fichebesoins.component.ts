import { Component, OnInit } from '@angular/core';
import { StaticSymbolCache } from '@angular/compiler';
import { FicheBesoinsService } from '../service/fiche-besoins.service';
import { ToastrService } from 'ngx-toastr';
import { fiche } from '../fiche';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-fichebesoins',
  templateUrl: './list-fichebesoins.component.html',
  styleUrls: ['./list-fichebesoins.component.css']
})
export class ListFichebesoinsComponent implements OnInit {
 
  id:number
  listfiche:any;
  motCle:String="";
  size:number=5;
  currentPage:number=0;
  pages:Array<number>;
  fiche:fiche;
  constructor(public fichebesoinsService : FicheBesoinsService,  private toastr: ToastrService, public router:Router ) { }

  ngOnInit(): void {
    this.fichebesoinsService.getAllFiche().subscribe(data=>{
      this.listfiche=data;
      this.pages= new Array(data.totalPages);
      }, err=>{
        console.log(err);
      })
    }

    doSerach(){
      this.fichebesoinsService.SearchFiche(this.motCle,this.currentPage,this.size).subscribe(data=>{
        this.listfiche=data;
        }, err=>{
          console.log(err);
        })
    }

    chercher(){
     this.doSerach();
    } 
    gotoPage(i:number){
      this.currentPage=i;
     this.doSerach();
    }    
    onEditFiche(id:number){
    this.router.navigate(['/updatefiche',id]);
    }
    onDeleteFiche(f:fiche){
    this.fichebesoinsService.deleteFiche(f.id).subscribe(data=>{
     this.listfiche.content.splice(
       this.listfiche.content.indexOf(f,1)
     )
     this.toastr.warning("Fiche de besoins supprimé")
    },err=>{
      console.log(err);
    })
    }
  }
  


  
  

