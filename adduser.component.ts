import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { user } from 'src/user';
import { UserService } from '../service/UserService.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addUserForm:FormGroup;
  user: user;
    constructor( private fb: FormBuilder, public userservice : UserService, private toastr: ToastrService, private router:Router) {
      let formControls = {
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
    this.addUserForm= this.fb.group(formControls);
  }
  get identifiant(){
    return this.addUserForm.get('identifiant');
  }
  get nom(){
    return this.addUserForm.get('nom');
  }
  get prenom(){
    return this.addUserForm.get('prenom');
  }
  get direction(){
    return this.addUserForm.get('direction');
  }
  get grade(){
    return this.addUserForm.get('grade');
  }
  get numerotelephone(){
    return this.addUserForm.get('numerotelephone');
  } 
  get email(){
    return this.addUserForm.get('email');
  }
  
  ngOnInit(): void {}
  addUser(user){
    this.userservice.saveuser(user).subscribe(data=>{
      this.toastr.success('utilisateur ajouté');
      this.router.navigate(['/userlist']);
    },err=>{
      console.log(err);
    })
  }
  
}
      

    
    
  


