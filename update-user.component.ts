import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/user';
import { UserService } from '../service/UserService.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { fiche } from '../fiche';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
upForm : FormGroup
user: user=new user() ;
iduser:number ;
  constructor(public route: ActivatedRoute ,
     public userservice: UserService, 
     private fb:FormBuilder,
      private router:Router,
      private toastr: ToastrService) { 

let formsControls ={
  identifiant: new FormControl('',[
    Validators.required,
    
    Validators.minLength(2)
  ]),
  nom: new FormControl('',[
    Validators.required,
    
    Validators.minLength(2)
  ]),
  prenom: new FormControl('',[
    Validators.required,
    
    Validators.minLength(2)
  ]),
  direction: new FormControl('',[
    Validators.required,
    
    Validators.minLength(2)
  ]),
  grade: new FormControl('',[
    Validators.required,
   
    Validators.minLength(2)
  ]),
  numerotelephone: new FormControl('',[
    Validators.required,
    
    Validators.minLength(2)
  ]),
  email: new FormControl('',[
    Validators.required,
 
    Validators.minLength(2)
  ])
}
this.upForm = this.fb.group(formsControls)
this.iduser=route.snapshot.params['id'];
  }
  get identifiant(){
    return this.upForm.get('identifiant');
  }
  get nom(){
    return this.upForm.get('nom');
  }
  get prenom(){
    return this.upForm.get('prenom');
  }
   get direction(){
     return this.upForm.get('direction');
   }
    get grade(){
      return this.upForm.get('grade');
    }
    get numerotelephone(){
      return this.upForm.get('numerotelephone');
    }
    get email(){
      return this.upForm.get('email');
    }
  
  ngOnInit(): void {
   this.userservice.getOneUser(this.iduser).subscribe(data=>{
 console.log(data);
  let user=data;
  this.upForm.patchValue({
    identifiant: user.identifiant,
    nom: user.nom,
    prenom: user.prenom,
    direction: user.direction,
    grade: user.grade,
    numerotelephone: user.numerotelephone,
    email: user.email
  })
   },err=>{
     console.log(err);
   })
  }
  edituser(){
   this.userservice.updateuser(this.user).subscribe(data=>{
   console.log(data);
  
   },err=>{
     console.log(err);
   })
    
  }
  goBack(){
    this.router.navigate(['/userlist']);
  }
}