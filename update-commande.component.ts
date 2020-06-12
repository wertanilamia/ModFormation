import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { commande } from '../commande';

import { ToastrService } from 'ngx-toastr';
import { CommandeServiceService } from '../service/commande-service.service';
@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styleUrls: ['./update-commande.component.css']
})
export class UpdateCommandeComponent implements OnInit {
  upcommandeForm:FormGroup;
  commande:commande=new commande();
  idcommande:number;
  idcom:number
  constructor(private fcom:FormBuilder,private router:Router,
               private activatedroute:ActivatedRoute, 
               private commandeservice: CommandeServiceService,
               private toastr: ToastrService) { 
    let formControls={
      theme: new FormControl('',[
         Validators.required,
         Validators.minLength(2)
       ]),
       datedebutF: new FormControl('',[
         Validators.required,
        
       ]),
       datefinF: new FormControl('',[
         Validators.required,
         
       ]),
       nom: new FormControl('',[ 
         Validators.required,
         Validators.minLength(2)
       ]),
       prenom: new  FormControl('',[
         Validators.required,
         Validators.minLength(2)
       ]),
       organismeformateur: new FormControl('',[
         Validators.required,
         Validators.minLength(2)
       ]),
       chefdepartementformation: new FormControl('',[
         Validators.required,
         Validators.min(2)
       ]),
       depenseprevisionnelle: new FormControl('',[
         Validators.required,
         Validators.minLength(2)
       ]),
       dateEnvoi: new FormControl('',[
         Validators.required,
         Validators.minLength(2)
       ])
     }
     this.upcommandeForm=this.fcom.group(formControls);
 
   }
   get nom(){
    return this.upcommandeForm.get('nom');
  }
  get prenom(){
    return this.upcommandeForm.get('prenom');
  }
  get theme(){
    return this.upcommandeForm.get('theme');
  }
 
  get organismeformateur(){
    return this.upcommandeForm.get('organismeformateur');
  }
 get chefdepartementformation(){
   return this.upcommandeForm.get('chefdepartementformation')
 }
  get datedebutF(){
    return this.upcommandeForm.get('datedebutF');
  }
  get datefinF(){
    return this.upcommandeForm.get('datefinF');
  }
get depenseprevisionnelle(){
  return this.upcommandeForm.get('depenseprevisionnelle');
}
get dateEnvoi(){
  return this.upcommandeForm.get('dateEnvoi');
}
  

  ngOnInit(): void {
  this.idcommande=this.activatedroute.snapshot.params['idcom'];
this.commandeservice.getOneCommande(this.idcommande).subscribe((res:any)=>{
  console.log(res);
 
  let commande=res;
  console.log(new Date(commande.datefinF));
this.upcommandeForm.patchValue({
  theme: commande.theme,
  dateEnvoi: commande.dateEnvoi,
  depenseprevisionnelle: commande.depenseprevisionnelle,
  nom: commande.nom,
  prenom: commande.prenom,
  chefdepartementformation: commande.chefdepartementformation,
  datedebutF: new Date(commande.datedebutF),
  datefinF : new Date(commande.datefinF),
  organismeformateur: commande.organismeformateur
})
},err=>{
  console.log(err);
})
  }

  updateCom(){
    this.commande = this.upcommandeForm.value
this.commande.idcom = this.idcommande
this.commandeservice.updateCommande(this.commande).subscribe(data=>{
  console.log(data);
  this.toastr.success('Commande modifié');
  this.router.navigate(['/listcommande'])
},err=>{
  console.log(err);
})
  }
}
