import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Admin2 } from '../../models/admin2';
import { Referee  } from '../../models/referee';
import { Users  } from '../../models/users';
import { Roles  } from '../../models/roles';
import { Admin2Service } from '../services/admin2.service';

@Component({
  selector: 'userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild('close') close: ElementRef;

  user: Users[] = [];
  admins: Admin2[] = [];
  referee: Referee[] = [];
  title: string;
  deleteRef: any;
  deleteUserID!:String;
  updateUserID!:String;
  roles: Roles[] = [];

  refs: Referee[];  
  newReferee: Referee = new Referee();
  newRefereelist:any; 
  

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: Admin2Service) {
   this.title = 'All Referees';
     // this.newReferee = new Referee();
   }

   ngOnInit() {

    this.adminService.findAllReferees().subscribe(data => {
      this.referee = data;
      console.log(data);
    });



  }

  deleteReferee() {  
    this.adminService.deleteReferee(this.deleteUserID) 
    .subscribe(  
      data => {  
        console.log(data);  
        this.viewAllUsers();

      },  
      error => console.log(error)); 
    this.closeModal();
    this.refreshPage();
  }


  confirmDeletion(id: String) {  
    this.deleteUserID = id;
    this.adminService.findRefereeByID(id) 
    .subscribe(  
      data => {  
        this.deleteRef = data;
        this.deleteRef = Array.of(this.deleteRef);  
      },  
      error => console.log(error));  

  }



  updateReferee(id: String){
    this.updateUserID = id;
    console.log("id is:" + id);
    this.getRoles();
    
    this.adminService.findRefereeByID(id)  
    .subscribe(  
      data => {  
        this.newRefereelist = data;
        this.newRefereelist = Array.of(this.newRefereelist); 
        console.log(data);             
      },  
      error => console.log(error));  


  }

  formdata=new FormGroup({  
    id:new FormControl(),  
    firstName:new FormControl(),
    lastName:new FormControl(),  
    email:new FormControl(),
    contactNo:new FormControl(),
    // username:new FormControl(),  
    // password:new FormControl(),
    address:new FormControl(),
    city:new FormControl(), 
    country:new FormControl(), 
    roleID:new FormControl()
  });  

  get refereeID(){  
    return this.updateUserID;  
  }  
  
  get refereeFirstN(){  
    return this.formdata.get('firstName');  
  }  
  
  get refereeLastN(){  
    return this.formdata.get('lastName');  
  }  
  
  get refereeEmail(){  
    return this.formdata.get('email');  
  }  

  get refereeContactNo(){  
    return this.formdata.get('contactNo');  
  }

  // get refereeUsername(){  
  //   return this.formdata.get('username');  
  // }

  // get refereePassword(){  
  //   return this.formdata.get('password');  
  // }

  get refereeAddress(){  
    return this.formdata.get('address');  
  }

  get refereeCity(){  
    return this.formdata.get('city');  
  }

  get refereeCountry(){  
    return this.formdata.get('country');  
  }

  get refereeRoleID(){  
    return this.formdata.get('roleID');  
  }


  onSubmit(){
   this.newReferee=new Referee();   
   this.newReferee.id=this.refereeID;  
   this.newReferee.firstName=this.refereeFirstN!.value;  
   this.newReferee.lastName=this.refereeLastN!.value;  
   this.newReferee.email=this.refereeEmail!.value; 
   this.newReferee.contactNo=this.refereeContactNo!.value; 
   // this.newReferee.username=this.refereeUsername!.value;   
   // this.newReferee.password=this.refereePassword!.value; 
   this.newReferee.address=this.refereeAddress!.value; 
   this.newReferee.city=this.refereeCity!.value; 
   this.newReferee.country=this.refereeCountry!.value; 
   this.newReferee.roleID=this.refereeRoleID!.value; 
    // console.log(this.StudentBranch.value);  


    this.adminService.updateReferee(this.newReferee).subscribe(  
      data => {       
        console.log(data);

      },  
      error => console.log(error));  
    this.closeModal();
    this.refreshPage();
  }



  viewAllUsers() {
    this.router.navigate(['/allusers']);
  }

  closeModal(){
    this.close.nativeElement.click();
  }

  // closeDeleteModal(){
  //   this.closeDeleteModal.nativeElement.click();
  // }

  refreshPage(){
    window.location.reload();
  }

  getRoles() {
    this.adminService.findAllRoles().subscribe(
      data => {
        this.roles = data;
        console.log(data);
      });

  }



}