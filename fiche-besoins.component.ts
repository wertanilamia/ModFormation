import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { FicheBesoinsService } from '../service/fiche-besoins.service';
import { Router } from '@angular/router';
import { fiche } from '../fiche';
import { ToastrService } from 'ngx-toastr';
import { DirectionserviceService } from '../service/directionservice.service';
import { direction } from '../direction';
@Component({
  selector: 'app-fiche-besoins',
  templateUrl: './fiche-besoins.component.html',
  styleUrls: ['./fiche-besoins.component.css']
})
export class FicheBesoinsComponent implements OnInit {
  addfiche: FormGroup
 fiche:fiche;
 listDirection:any;
 dir:direction;
 checkboxValue: boolean=false;
  constructor(public fichebesoinsservice: FicheBesoinsService, private fb : FormBuilder,
     private toastr:ToastrService , private directionservice: DirectionserviceService) { 
       this.checkboxValue=false;
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
  filiere: new FormControl('',[
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
  this.addfiche = this.fb.group(formControls);
}
get DirectionAeroport(){
  return this.addfiche.get('DirectionAeroport');
}
get Division(){
  return this.addfiche.get('Division');
}
get Service(){
  return this.addfiche.get('Service');
}
get matricule(){
  return this.addfiche.get('matricule');
}
get nom(){
  return this.addfiche.get('nom');
}
get prenom(){
  return this.addfiche.get('prenom');
}
get emploi(){
  return this.addfiche.get('emploi');
}
get filiere(){
  return this.addfiche.get('filiere');
}
get tachesprincipales(){
  return this.addfiche.get('tachesprincipales');
}
get theme(){
  return this.addfiche.get('theme');
}
get periodesouhaitee(){
  return this.addfiche.get('periodesouhaitee');
}


  ngOnInit(): void {

  }
 
  showDirection(){
    this.directionservice.getAllDirection().subscribe(res=>{
      console.log(res);
        this.listDirection=res;
      },err=>{
        console.log(err);
      })
  }
  
  }
  

