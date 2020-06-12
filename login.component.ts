import { Component, OnInit } from '@angular/core';
import{FormGroup , FormControl , FormBuilder , Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup

  constructor( private fb:FormBuilder) {
    let formControls={
      nomutilisateur : new FormControl('',[
        Validators.required,
     
      ]),

      motdepasse: new FormControl('',[
        Validators.required,
      
      ])
    }
    this.myForm=this.fb.group(formControls);
  }
  get nomutilisateur(){
    return this.myForm.get('nomutilisateur');
  }
  get motdepasse(){
    return this.myForm.get('motdepasse');
  }

  ngOnInit(): void {
  }
  enregistrerUtilisateur(){
    console.log(this.myForm.value);
  }

}
