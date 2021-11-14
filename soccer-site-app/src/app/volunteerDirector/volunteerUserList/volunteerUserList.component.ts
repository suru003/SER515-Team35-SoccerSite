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
  selector: 'volunteerUserList',
  templateUrl: './volunteerUserList.component.html',
  styleUrls: ['./volunteerUserList.component.css']
})
export class VolunteerUserListComponent implements OnInit {
  @ViewChild('close') close: ElementRef;

  // admins: Admin2[] = [];
  volunteer: Volunteer[] = [];
  title: string;
  deleteRef: any;
  deleteUserID!:String;
  updateUserID!:String;
  roles: Roles[] = [];

  refs: Volunteer[];  
  newVolunteer: Volunteer = new Volunteer();
  newVolunteerlist:any; 
  

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private volunteerService: VolunteerDirectorService) {
   this.title = 'All Volunteers';
     // this.newVolunteer = new Volunteer();
   }

   ngOnInit() {

    this.volunteerService.findByStatus("VERIFIED").subscribe(data => {
      this.volunteer = data;
      console.log(data);
    });



  }

  deleteVolunteer() {  
    this.volunteerService.deleteVolunteer(this.deleteUserID) 
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
    console.log("delete id is" + this.deleteUserID);  
    this.volunteerService.findVolunteerByID(id) 
    .subscribe(  
      data => {  
        this.deleteRef = data;
        this.deleteRef = Array.of(this.deleteRef);  
      },  
      error => console.log(error));  

  }



  updateVolunteer(id: String){
    this.updateUserID = id;
    console.log("id is:" + id);
    this.getRoles();
    
    this.volunteerService.findVolunteerByID(id)  
    .subscribe(  
      data => {  
        this.newVolunteerlist = data;
        this.newVolunteerlist = Array.of(this.newVolunteerlist); 
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

  get volunteerID(){  
    return this.updateUserID;  
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
   this.newVolunteer.status="VERIFIED"; 
    // console.log(this.StudentBranch.value);  


    this.volunteerService.updateVolunteer(this.newVolunteer).subscribe(  
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