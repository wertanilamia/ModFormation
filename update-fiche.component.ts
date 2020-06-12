import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FicheBesoinsService } from '../service/fiche-besoins.service';
import { fiche } from '../fiche';
import { FormBuilder, FormControl, Validators, FormGroup, NgModel } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-fiche',
  templateUrl: './update-fiche.component.html',
  styleUrls: ['./update-fiche.component.css']
})
export class UpdateFicheComponent implements OnInit {
 fiche: fiche=new fiche();
  id:number;
  updatefiche:FormGroup;
  constructor(private router:ActivatedRoute, public fichebesoinsservice:FicheBesoinsService,private toastr:ToastrService, private fb:FormBuilder) {
    let formControls = {
      DirectionAeroport:new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("a-z")
      ]),
      Division : new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("a-z")
      ]),
      Service: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("a-z")
      ]),
      matricule: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("1-9")
      ]),
      nom: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("a-z")
      ]),
      prenom: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("a-z")
      ]),
      emploi: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("a-z")
      ]),
      
      tachesprincipales: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("a-z") 
      ]),
      theme: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("a-z") 
      ]),
      periodesouhaitee: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("a-z") 
      ]) 
    
    }
      this.updatefiche=this.fb.group(formControls)
  }
 
  get DirectionAeroport(){
    return this.updatefiche.get('DirectionAeroport');
  }
  get Division(){
    return this.updatefiche.get('Division');
  }
  get Service(){
    return this.updatefiche.get('Service');
  }
  get matricule(){
    return this.updatefiche.get('matricule');
  }
  get nom(){
    return this.updatefiche.get('nom');
  }
  get prenom(){
    return this.updatefiche.get('prenom');
  }
  get emploi(){
    return this.updatefiche.get('emploi');
  }
  
  get tachesprincipales(){
    return this.updatefiche.get('tachesprincipales');
  }
  get theme(){
    return this.updatefiche.get('theme');
  }
  get periodesouhaitee(){
    return this.updatefiche.get('periodesouhaitee');
  }
   
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
this.fichebesoinsservice.getfiche(this.id).subscribe(data=>{
  console.log(data);
 let fiche=data;
 this.updatefiche.patchValue({
   nom: fiche.nom,
   prenom:fiche.prenom,
   emploi: fiche.emploi,
   service: fiche.service,
   division: fiche.division,
   matricule: fiche.matricule,
   tachesprincipales: fiche.tachesprincipales,
   theme: fiche.theme,
   periodesouhaitee: fiche.periodesouhaitee,
   Division: fiche.division,
   DirectionAeroport: fiche.DirectionAeroport
 })
},err=>{
  console.log(err);
})
}
update(fiche){
  this.fichebesoinsservice.updateFiche(this.fiche).subscribe(data=>{
console.log(data);
this.toastr.success("mise à jour effectué")
  },err=>{
    console.log(err);
  })
}}

