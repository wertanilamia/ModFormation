import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { commande } from '../commande';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CommandeServiceService } from '../service/commande-service.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  addcommandeForm:FormGroup;
  com:commande;
  constructor(private fcom:FormBuilder, private commandeservice:CommandeServiceService,
    private router:Router,private toastr:ToastrService) {
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
     this.addcommandeForm=this.fcom.group(formControls);
 
   }
   get nom(){
    return this.addcommandeForm.get('nom');
  }
  get prenom(){
    return this.addcommandeForm.get('prenom');
  }
  get theme(){
    return this.addcommandeForm.get('theme');
  }
 
  get organismeformateur(){
    return this.addcommandeForm.get('organismeformateur');
  }
 get chefdepartementformation(){
   return this.addcommandeForm.get('chefdepartementformation')
 }
  get datedebutF(){
    return this.addcommandeForm.get('datedebutF');
  }
  get datefinF(){
    return this.addcommandeForm.get('datefinF');
  }
get depenseprevisionnelle(){
  return this.addcommandeForm.get('depenseprevisionnelle');
}
get dateEnvoi(){
  return this.addcommandeForm.get('dateEnvoi');
}

  ngOnInit(): void {
  }
  addCom(com){
    console.log(this.addcommandeForm.value);
  this.commandeservice.addcommande(com).subscribe(res=>{
    console.log(res);
    this.toastr.success('Commande ajouté');
    this.router.navigate(['/listcommande']);
  },error=>{
    console;console.log(error);
    
  })
  }
}

