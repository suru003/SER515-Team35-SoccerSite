import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Team  } from '../../../models/team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'teamsList',
  templateUrl: './teamsList.component.html',
  styleUrls: ['./teamsList.component.css']
})
export class TeamsListComponent implements OnInit {
  @ViewChild('close') close: ElementRef;

  // admins: Admin2[] = [];
  teams: Team[] = [];
  title: string;
  deleteTeamFound: any;
  deleteTeamID!:String;
  updateTeamID!:String;
  // roles: Roles[] = [];

  team: Team[];  
  newReferee: Team = new Team();
  newRefereelist:any; 
  

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private teamService: TeamService) {
   this.title = 'Verified Teams';
     // this.newReferee = new Referee();
   }

   ngOnInit() {

    this.teamService.findByisVerifiedTrue().subscribe(data => {
      this.teams = data;
      console.log(data);
    });

  }

  deleteTeam() {  
    this.teamService.deleteTeam(this.deleteTeamID) 
    .subscribe(  
      data => {  
        // console.log(data);  
        // this.viewPendingTeams();

      },  
      error => console.log(error)); 
    this.closeModal();
    this.refreshPage();
   }


   confirmDeletion(id: String) {  
    this.deleteTeamID = id;
    // console.log("delete id is" + this.deleteTeamID);  
    this.teamService.getTeam(id) 
    .subscribe(  
      data => {  
        this.deleteTeamFound = data;
        this.deleteTeamFound = Array.of(this.deleteTeamFound);  
      },  
      error => console.log(error));  

  }



  updateReferee(id: String){
    // this.updateUserID = id;
    // console.log("id is:" + id);
    // this.getRoles();
    
    // this.refereeService.findRefereeByID(id)  
    // .subscribe(  
    //   data => {  
    //     this.newRefereelist = data;
    //     this.newRefereelist = Array.of(this.newRefereelist); 
    //     console.log(data);             
    //   },  
    //   error => console.log(error));  
  }

  

  formdata=new FormGroup({  
    id:new FormControl(),  
    firstName:new FormControl(),
    lastName:new FormControl(),  
    email:new FormControl(),
    contactNo:new FormControl(),
    address:new FormControl(),
    city:new FormControl(), 
    country:new FormControl(), 
    roleID:new FormControl()
  });  

  // get refereeID(){  
  //   return this.updateUserID;  
  // }  
  
  // get refereeFirstN(){  
  //   return this.formdata.get('firstName');  
  // }  
  
  // get refereeLastN(){  
  //   return this.formdata.get('lastName');  
  // }  
  
  // get refereeEmail(){  
  //   return this.formdata.get('email');  
  // }  

  // get refereeContactNo(){  
  //   return this.formdata.get('contactNo');  
  // }


  // get refereeAddress(){  
  //   return this.formdata.get('address');  
  // }

  // get refereeCity(){  
  //   return this.formdata.get('city');  
  // }

  // get refereeCountry(){  
  //   return this.formdata.get('country');  
  // }

  // get refereeRoleID(){  
  //   return this.formdata.get('roleID');  
  // }


  // onSubmit(){
  //  this.newReferee=new Referee();   
  //  this.newReferee.id=this.refereeID;  
  //  this.newReferee.firstName=this.refereeFirstN!.value;  
  //  this.newReferee.lastName=this.refereeLastN!.value;  
  //  this.newReferee.email=this.refereeEmail!.value; 
  //  this.newReferee.contactNo=this.refereeContactNo!.value; 
  //  // this.newReferee.username=this.refereeUsername!.value;   
  //  // this.newReferee.password=this.refereePassword!.value; 
  //  this.newReferee.address=this.refereeAddress!.value; 
  //  this.newReferee.city=this.refereeCity!.value; 
  //  this.newReferee.country=this.refereeCountry!.value; 
  //  this.newReferee.roleID=this.refereeRoleID!.value; 
  //  this.newReferee.status="VERIFIED"; 
  //   // console.log(this.StudentBranch.value);  


  //   this.refereeService.updateReferee(this.newReferee).subscribe(  
  //     data => {       
  //       console.log(data);

  //     },  
  //     error => console.log(error));  
  //   this.closeModal();
  //   this.refreshPage();
  // }



  // viewVerifiedTeams() {
  //   this.router.navigate(['/teamNewApplicationList']);
  // }

  closeModal(){
    this.close.nativeElement.click();
  }

  refreshPage(){
    window.location.reload();
  }

  // getRoles() {
  //   this.refereeService.findAllRoles().subscribe(
  //     data => {
  //       this.roles = data;
  //       console.log(data);
  //     });

  // }



}