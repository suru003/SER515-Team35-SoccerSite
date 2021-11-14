import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
// import * as jsPDF from 'jspdf'; 

import { Team  } from '../../../models/team';


// services
import { SharedService } from "../../services/shared.service";
import { TeamService } from '../../services/team.service';

declare var $: any;

@Component({
  selector: 'teamNewApplicationList',
  templateUrl: './teamNewApplicationList.component.html',
  styleUrls: ['./teamNewApplicationList.component.css']
})
export class TeamNewApplicationListComponent implements OnInit {
  @ViewChild('close') close: ElementRef;
  // @ViewChild('teamApplicationsTable') teamApplicationsTable: ElementRef;

  teams: Team[] = [];
  title: string;
  deleteTeamFound: any;
  deleteTeamID!:String;
  updateTeamID!:String;
  director!:any;
  

  // refs: Referee[];  
  // newReferee: Referee = new Referee();
  teamFound:any; 
  teamFound2:Team = new Team(); 

  verifyTeamID!:String;
  verifyTeam: Team = new Team();
  // findRef!:Referee;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private teamService: TeamService,
    private sharedService: SharedService,) {
   this.title = 'Pending Applications';
     // this.newReferee = new Referee();
   }

   ngOnInit() {

    this.sharedService.sharedDirector.subscribe(
          data => {
            this.director= data;
          },
          error => console.log(error));

   this.teamService.findByisVerifiedFalse().subscribe(data => {
      this.teams = data;
      console.log(data);
    });

  }

   deleteTeam() {  
    this.teamService.deleteTeam(this.deleteTeamID) 
    .subscribe(  
      data => {  
        // console.log(data);  
        this.viewPendingTeams();

      },  
      error => console.log(error)); 
    this.closeModal();
    // this.refreshPage();
    this.reloadComponent();
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



  viewTeam(id: String){
    this.verifyTeamID = id;
    
    this.teamService.getTeam(id)  
    .subscribe(  
      data => {  
        this.teamFound = data; 
        console.log("team found" + this.teamFound.lastName); 
        this.teamFound = Array.of(this.teamFound); 
        // console.log(data); 

      },  
      error => console.log(error));  

  }

  formdata=new FormGroup({  
    id:new FormControl(),  
    teamName:new FormControl(),
    categoryID:new FormControl(),  
    coachID:new FormControl(),
    contactNo:new FormControl(),
    tournamentID:new FormControl(),  
    // password:new FormControl(),
    // address:new FormControl(),
    // city:new FormControl(), 
    // country:new FormControl(), 
    // roleID:new FormControl()
  });  

  get teamID(){  
    return this.verifyTeamID;  
  }  
  
  get teamName(){  
    return this.formdata.get('teamName');  
  }  
  
  get teamCategory(){  
    return this.formdata.get('categoryID');  
  }  
  
//   get refereeEmail(){  
//     return this.formdata.get('email');  
//   }  

//   get refereeContactNo(){  
//     return this.formdata.get('contactNo');  
//   }

//   // get refereeUsername(){  
//   //   return this.formdata.get('username');  
//   // }

//   // get refereePassword(){  
//   //   return this.formdata.get('password');  
//   // }

//   get refereeAddress(){  
//     return this.formdata.get('address');  
//   }

//   get refereeCity(){  
//     return this.formdata.get('city');  
//   }

//   get refereeCountry(){  
//     return this.formdata.get('country');  
//   }

//   get refereeRoleID(){  
//     return this.formdata.get('roleID');  
//   }


  onSubmit(){
   // this.newReferee=new Referee();   
   // this.newReferee.id=this.refereeID;  
   // this.newReferee.firstName=this.refereeFirstN!.value;  
   // this.newReferee.lastName=this.refereeLastN!.value;  
   // this.newReferee.email=this.refereeEmail!.value; 
   // this.newReferee.contactNo=this.refereeContactNo!.value; 
   // // this.newReferee.username=this.refereeUsername!.value;   
   // // this.newReferee.password=this.refereePassword!.value; 
   // this.newReferee.address=this.refereeAddress!.value; 
   // this.newReferee.city=this.refereeCity!.value; 
   // this.newReferee.country=this.refereeCountry!.value; 
   // this.newReferee.roleID=this.refereeRoleID!.value; 
   //  // console.log(this.StudentBranch.value);  


   //  this.refereeService.updateReferee(this.newReferee).subscribe(  
   //    data => {       
   //      console.log(data);

   //    },  
   //    error => console.log(error));  
   //  this.closeModal();
   //  this.refreshPage();
  }


  verifyingTeam(){
   console.log("verify id is" + this.verifyTeamID);
   // this.verifyUser=new Referee();
   // console.log("trying to verify");

   this.teamService.getTeam(this.verifyTeamID)  
   .subscribe(  
    data => {  
      this.teamFound2 = data;
        let verify1Team = Object.assign({}, this.teamFound2, { verified: true });
        this.teamService.updateTeam(verify1Team).subscribe(  
          data => {       
            console.log(data);
            this.closeModal();
            this.refreshPage(); 
            // this.router.navigate([this.router.url]);
            // this.viewPendingTeams();
            // this.allVerifiedTeams();

          }, error => console.log(error));
        },  
      error => console.log(error)); 


 }



//  viewAllUsers() {
//   this.router.navigate(['/allusers']);
// }

closeModal(){
  this.close.nativeElement.click();
}

//   // closeDeleteModal(){
//   //   this.closeDeleteModal.nativeElement.click();
//   // }

  refreshPage(){
    window.location.reload();
  }

//   getRoles() {
//     this.refereeService.findAllRoles().subscribe(
//       data => {
//         this.roles = data;
//         console.log(data);
//       });

//   }

viewPendingTeams() {
    this.router.navigate(['/teamNewApplicationList']);
  }

  allNewApplications(){
    this.router.navigate(['teamNewApplicationList'], {relativeTo:this.route});
  }

  allVerifiedTeams(){
    this.router.navigate(['teamsList'], {relativeTo:this.route});
  }

  // public SavePDF(): void {  
  //   let teamApplicationsTable=this.teamApplicationsTable.nativeElement;  
  //   let doc = new jsPDF();  
  //   let _elementHandlers =  
  //   {  
  //     '#editor':function(element,renderer){  
  //       return true;  
  //     }  
  //   };  
  //   doc.fromHTML(teamApplicationsTable.innerHTML,15,15,{  
  
  //     'width':190,  
  //     'elementHandlers':_elementHandlers  
  //   });  
  
  //   doc.save('test.pdf');  
  // }

  reloadComponent() {
  let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);

  }

}