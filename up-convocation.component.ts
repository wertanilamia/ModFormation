import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { convocation } from '../convocation';
import { ConvocationServiceService } from '../service/convocation-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-up-convocation',
  templateUrl: './up-convocation.component.html',
  styleUrls: ['./up-convocation.component.css']
})
export class UpConvocationComponent implements OnInit {
  upconvocationForm:FormGroup
  conv: convocation=new convocation();
  idc:number;
  constructor(private fUp:FormBuilder, private activatedroute:ActivatedRoute,
     private convocationservice:ConvocationServiceService,
     private toastr: ToastrService,  private router:Router) { 
    this.idc=activatedroute.snapshot.params['idc'];
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
      nbreparticipant: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      chefdepartementformation: new FormControl('',[
        Validators.required,
        Validators.min(2)
      ]),
      dateEnvoi: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ])
    }
    this.upconvocationForm=this.fUp.group(formControls);
  }
  get chefdepartementformation(){
    return this.upconvocationForm.get('chefdepartementformation')
  }
  get nbreparticipant(){
    return this.upconvocationForm.get('nbreparticipant');
  }
  get theme(){
    return this.upconvocationForm.get('theme');
  }
  get datedebut(){
    return this.upconvocationForm.get('datedebut');
  }
  get datefin(){
    return this.upconvocationForm.get('datefin');
  }
  get orgformateur(){
    return this.upconvocationForm.get('orgformateur');
  }
  get heure(){
    return this.upconvocationForm.get('heure');
  }
  get lieux(){
    return this.upconvocationForm.get('lieux');
  }
  get dateEnvoi(){
    return this.upconvocationForm.get('dateEnvoi');
  }

  ngOnInit(): void {
    this.convocationservice.getConvocation(this.idc).subscribe(data=>{
      console.log(data);
     let conv=data;
     this.upconvocationForm.patchValue({
       theme: conv.theme,
       heure: conv.heure,
       lieux: conv.lieux,
       orgformateur: conv.orgformateur,
       datedebut: conv.datedebut,
       datefin: conv.datefin,
       nbreparticipant: conv.nbreparticipant,
       dateEnvoi: conv.dateEnvoi,
       chefdepartementformation: conv.chefdepartementformation
     })
    },err=>{
      console.log(err);
    })
  }
  editConvocation(){
this.convocationservice.updateConvocation(this.conv).subscribe(res=>{
  console.log(res);
  this.toastr.success('Convocation modifié');
  this.router.navigate(['/listconvocation'])
},err=>{
  console.log(err);
})
  }

}
