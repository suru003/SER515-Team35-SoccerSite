import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Admin2 } from '../../../models/admin2';
import { Referee  } from '../../../models/referee';
import { Roles  } from '../../../models/roles';
import { RefereeDirectorService } from '../../services/refereeDirector.service';

@Component({
  selector: 'refereeNewApplicationList',
  templateUrl: './refereeNewApplicationList.component.html',
  styleUrls: ['./refereeNewApplicationList.component.css']
})
export class RefereeNewApplicationListComponent implements OnInit {
  @ViewChild('close') close: ElementRef;

  referee: Referee[] = [];
  title: string;
  deleteRef: any;
  deleteUserID!:String;
  viewUserID!:String;
  
  roles: Roles[] = [];

  refs: Referee[];  
  newReferee: Referee = new Referee();
  newRefereelist:any; 

  verifyUserID!:String;
  verifyUser: Referee = new Referee();
  findRef!:Referee;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private refereeService: RefereeDirectorService) {
   this.title = 'All Referees';
     // this.newReferee = new Referee();
   }

   ngOnInit() {

    this.refereeService.findByStatus("NEW").subscribe(data => {
      this.referee = data;
      // console.log(data);
    });



  }

  deleteReferee() {  
    this.refereeService.deleteReferee(this.deleteUserID) 
    .subscribe(  
      data => {  
        // console.log(data);  
        this.viewAllUsers();

      },  
      error => console.log(error)); 
    this.closeModal();
    this.refreshPage();
  }


  confirmDeletion(id: String) {  
    this.deleteUserID = id;
    this.refereeService.findRefereeByID(id) 
    .subscribe(  
      data => {  
        this.deleteRef = data;
        this.deleteRef = Array.of(this.deleteRef);  
      },  
      error => console.log(error));  

  }



  viewReferee(id: String){
    this.viewUserID = id;
    // console.log("id is:" + id);
    // this.getRoles();
    
    this.refereeService.findRefereeByID(id)  
    .subscribe(  
      data => {  
        this.newRefereelist = data; 
        // console.log("firstname" + this.newRefereelist.lastName); 
        this.newRefereelist = Array.of(this.newRefereelist); 
        // console.log(data); 

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
    return this.viewUserID;  
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


    this.refereeService.updateReferee(this.newReferee).subscribe(  
      data => {       
        console.log(data);

      },  
      error => console.log(error));  
    this.closeModal();
    this.refreshPage();
  }


  verifyReferee(){
   // this.verifyUserID = id;
   console.log("verify id is" + this.viewUserID);
   this.verifyUser=new Referee();
   console.log("trying to verify");

   this.refereeService.findRefereeByID(this.viewUserID)  
   .subscribe(  
    data => {  
      this.findRef = data;
      console.log("firstname" + this.findRef.email); 
        // this.newRefereelist = Array.of(this.newRefereelist);
        // console.log(data);   

        this.verifyUser.id = this.viewUserID;
        this.verifyUser.firstName = this.findRef.firstName;
        // console.log("verifyuser firstname" + this.findRef.firstName);  
        this.verifyUser.lastName = this.findRef.lastName;
        this.verifyUser.email = this.findRef.email;
        this.verifyUser.contactNo = this.findRef.contactNo;
        // this.verifyUser.username = this.findRef.username;
        // this.verifyUser.password = this.findRef.password;
        this.verifyUser.address = this.findRef.address;
        this.verifyUser.city = this.findRef.city;
        this.verifyUser.country = this.findRef.country;
        this.verifyUser.roleID = this.findRef.roleID;
        this.verifyUser.status = "VERIFIED"; 

        this.refereeService.updateReferee(this.verifyUser).subscribe(  
          data => {       
            console.log(data);
            this.closeModal();
            this.refreshPage(); 

          }, error => console.log(error));

      },  
      error => console.log(error)); 



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
    this.refereeService.findAllRoles().subscribe(
      data => {
        this.roles = data;
        console.log(data);
      });

  }



}