import { Component, OnInit, NgModuleFactoryLoader } from '@angular/core';
import { UserService } from '../service/UserService.service';
import { Router } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { user } from 'src/user';
import { Observable, from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
size:number=5;
userlist:any;
user:user;
mcSearch:String="";
PageCourant:number=0;
pagination:Array<number>;
  constructor(private userservice: UserService, public router : Router,
     private toastr: ToastrService) { }

  ngOnInit(): void {
   this.userservice.getAllusers().subscribe(data=>{
     this.userlist=data;
   },err=>{
     console.log(err);
   })
    }

    onupdateUser(id:number){
      this.router.navigate(['/updateuser',id]);
    }
   
    onDeleteUser(user){
      this.userservice.deleteUser(user.id).subscribe(res=>{
        this.userlist.content.splice(
          this.userlist.content.indexOf(user,1)
        )
        this.toastr.error('utilisateur supprimé');
      }, err=>{
        console.log(err);
      })
     
}

Search(){
this.userservice.SearchUser(this.mcSearch,this.PageCourant,this.size).subscribe(data=>{
  this.userlist=data;

},err=>{
  console.log(err);
})
}
chercherUser(){
this.Search();
}

openModal(detailsUser){
  
}



}
    
