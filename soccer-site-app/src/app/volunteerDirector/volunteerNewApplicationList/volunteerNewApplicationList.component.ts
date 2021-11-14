import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Admin2 } from '../../../models/admin2';
import { Volunteer  } from '../../../models/volunteer';
import { Roles  } from '../../../models/roles';
import { VolunteerDirectorService } from '../../services/volunteerDirector.service';

@Component({
  selector: 'volunteerNewApplicationList',
  templateUrl: './volunteerNewApplicationList.component.html',
  styleUrls: ['./volunteerNewApplicationList.component.css']
})
export class VolunteerNewApplicationListComponent implements OnInit {
  @ViewChild('close') close: ElementRef;

  volunteer: Volunteer[] = [];
  title: string;
  deleteRef: any;
  deleteUserID!:String;
  viewUserID!:String;
  
  roles: Roles[] = [];

  refs: Volunteer[];  
  newVolunteer: Volunteer = new Volunteer();
  newVolunteerlist:any; 

  verifyUserID!:String;
  verifyUser: Volunteer = new Volunteer();
  findRef!:Volunteer;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private volunteerService: VolunteerDirectorService) {
   this.title = 'All Volunteers';
     // this.newVolunteer = new Volunteer();
   }

   ngOnInit() {

    this.volunteerService.findByStatus("NEW").subscribe(data => {
      this.volunteer = data;
      // console.log(data);
    });



  }

  deleteVolunteer() {  
    this.volunteerService.deleteVolunteer(this.deleteUserID) 
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
    this.volunteerService.findVolunteerByID(id) 
    .subscribe(  
      data => {  
        this.deleteRef = data;
        this.deleteRef = Array.of(this.deleteRef);  
      },  
      error => console.log(error));  

  }



  viewVolunteer(id: String){
    this.viewUserID = id;
    // console.log("id is:" + id);
    // this.getRoles();
    
    this.volunteerService.findVolunteerByID(id)  
    .subscribe(  
      data => {  
        this.newVolunteerlist = data; 
        // console.log("firstname" + this.newVolunteerlist.lastName); 
        this.newVolunteerlist = Array.of(this.newVolunteerlist); 
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

  get volunteerID(){  
    return this.viewUserID;  
  }  
  
  get volunteerFirstN(){  
    return this.formdata.get('firstName');  
  }  
  
  get volunteerLastN(){  
    return this.formdata.get('lastName');  
  }  
  
  get volunteerEmail(){  
    return this.formdata.get('email');  
  }  

  get volunteerContactNo(){  
    return this.formdata.get('contactNo');  
  }

  // get volunteerUsername(){  
  //   return this.formdata.get('username');  
  // }

  // get volunteerPassword(){  
  //   return this.formdata.get('password');  
  // }

  get volunteerAddress(){  
    return this.formdata.get('address');  
  }

  get volunteerCity(){  
    return this.formdata.get('city');  
  }

  get volunteerCountry(){  
    return this.formdata.get('country');  
  }

  get volunteerRoleID(){  
    return this.formdata.get('roleID');  
  }


  onSubmit(){
   this.newVolunteer=new Volunteer();   
   this.newVolunteer.id=this.volunteerID;  
   this.newVolunteer.firstName=this.volunteerFirstN!.value;  
   this.newVolunteer.lastName=this.volunteerLastN!.value;  
   this.newVolunteer.email=this.volunteerEmail!.value; 
   this.newVolunteer.contactNo=this.volunteerContactNo!.value; 
   // this.newVolunteer.username=this.volunteerUsername!.value;   
   // this.newVolunteer.password=this.volunteerPassword!.value; 
   this.newVolunteer.address=this.volunteerAddress!.value; 
   this.newVolunteer.city=this.volunteerCity!.value; 
   this.newVolunteer.country=this.volunteerCountry!.value; 
   this.newVolunteer.roleID=this.volunteerRoleID!.value; 
    // console.log(this.StudentBranch.value);  


    this.volunteerService.updateVolunteer(this.newVolunteer).subscribe(  
      data => {       
        console.log(data);

      },  
      error => console.log(error));  
    this.closeModal();
    this.refreshPage();
  }


  verifyVolunteer(){
   // this.verifyUserID = id;
   console.log("verify id is" + this.viewUserID);
   this.verifyUser=new Volunteer();
   console.log("trying to verify");

   this.volunteerService.findVolunteerByID(this.viewUserID)  
   .subscribe(  
    data => {  
      this.findRef = data;
      console.log("firstname" + this.findRef.email); 
        // this.newVolunteerlist = Array.of(this.newVolunteerlist);
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

        this.volunteerService.updateVolunteer(this.verifyUser).subscribe(  
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
    this.volunteerService.findAllRoles().subscribe(
      data => {
        this.roles = data;
        console.log(data);
      });

  }



}