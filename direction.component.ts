import { Component, OnInit } from '@angular/core';
import { direction } from '../direction';
import { DirectionserviceService } from '../service/directionservice.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  listdirection: any;
  d: direction;
  direct:direction=new direction();
  directionform: FormGroup
  constructor(private directionservice:DirectionserviceService, private fb : FormBuilder) { 
    let formControls = {
      nomdirection:new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("a-z")
      ])
  }
  this.directionform = this.fb.group(formControls);
  }
  get nomdirection(){
    return this.directionform.get('nomdirection');
  }
  ngOnInit(): void {
    this.directionservice.getAllDirection().subscribe(data=>{
      this.listdirection=data
    },err=>{
      console.log(err);
    })
  }
  onSave(){
this.directionservice.saveDirection(this.direct).subscribe(res=>{
  console.log(res);
  this.listdirection=res;
},err=>{
  console.log(err);
})
  }

}
