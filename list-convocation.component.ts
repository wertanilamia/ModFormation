import { Component, OnInit } from '@angular/core';
import { convocation } from '../convocation';
import { ConvocationServiceService } from '../service/convocation-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-convocation',
  templateUrl: './list-convocation.component.html',
  styleUrls: ['./list-convocation.component.css']
})
export class ListConvocationComponent implements OnInit {
  mcC:String="";
  sizeC:number=5;
  pageC:number=0;
  convocationList:any;
  paginC:Array<number>;
  c:convocation=new convocation();
  i:number;
  
  constructor(private convocationservice:ConvocationServiceService,
     private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
 this.convocationservice.getAllConvocation().subscribe(data=>{
   console.log(data);
   this.convocationList=data;
 },err=>{
   console.log(err);
 })
  }
  deleteConvocation(c){
    this.convocationservice.deleteC(c.idc).subscribe(data=>{
     this.convocationList.content.splice(
       this.convocationList.content.indexOf(c,1)
     )
     this.toastr.error('Convocation supprimé');
    },err=>{
      console.log(err);
    })

  }
  doSearchC(){
this.convocationservice.chercherC(this.mcC,this.pageC,this.sizeC).subscribe((data:any)=>{
  this.convocationList=data;
  this.paginC=new Array(data.totalPages);
},err=>{
  console.log(err);
})
  }
  chercherC(){
this.doSearchC();
  }
  nextPageC(i){
this.pageC=i;
this.doSearchC();
  }
 
 
}

