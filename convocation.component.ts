import { Component, OnInit } from '@angular/core';

import { convocation } from '../convocation';

import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

import { ConvocationServiceService } from '../service/convocation-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convocation',
  templateUrl: './convocation.component.html',
  styleUrls: ['./convocation.component.css']
})
export class ConvocationComponent implements OnInit {
  addconvocationForm:FormGroup;
  convocation:convocation;
 
  constructor(private fc:FormBuilder, private convocationservice:ConvocationServiceService,
              private router:Router,private toastr:ToastrService ) { 
    let formControls={
     theme: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      datedebut: new FormControl('',[
        Validators.required,
       
      ]),
      datefin: new FormControl('',[
        Validators.required,
        
      ]),
      heure: new FormControl('',[ 
        Validators.required,
        Validators.minLength(2)
      ]),
      lieux: new  FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      orgformateur: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      chefdepartementformation: new FormControl('',[
        Validators.required,
        Validators.min(2)
      ]),
      destinataire: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      nbreparticipant: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      dateEnvoi: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ])
    }
    this.addconvocationForm=this.fc.group(formControls);

  }
  get lieux(){
    return this.addconvocationForm.get('lieux');
  }
  get theme(){
    return this.addconvocationForm.get('theme');
  }
  get heure(){
    return this.addconvocationForm.get('heure');
  }
  get orgformateur(){
    return this.addconvocationForm.get('orgformateur');
  }
 get chefdepartementformation(){
   return this.addconvocationForm.get('chefdepartementformation')
 }
  get datedebut(){
    return this.addconvocationForm.get('datedebut');
  }
  get datefin(){
    return this.addconvocationForm.get('datefin');
  }
get destinataire(){
  return this.addconvocationForm.get('destinataire');
}
get nbreparticipant(){
  return this.addconvocationForm.get('nbreparticipant');
}
get dateEnvoi(){
  return this.addconvocationForm.get('dateEnvoi');
}

  ngOnInit(): void {
  }
  addC(convocation){
this.convocationservice.addConvocation(convocation).subscribe(data=>{
 
this.toastr.success('Convocation ajouté');
this.router.navigate(['/listconvocation']);
},err=>{
  console.log(err);
})
}
}