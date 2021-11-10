import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Team  } from '../../../models/team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'teamNewApplicationList',
  templateUrl: './teamNewApplicationList.component.html',
  styleUrls: ['./teamNewApplicationList.component.css']
})
export class TeamNewApplicationListComponent implements OnInit {
  @ViewChild('close') close: ElementRef;

  teams: Team[] = [];
  title: string;
  deleteRef: any;
  deleteUserID!:String;
  updateUserID!:String;
  

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
    private teamService: TeamService) {
   this.title = 'Pending Applications';
     // this.newReferee = new Referee();
   }

   ngOnInit() {

   this.teamService.findByisVerifiedFalse().subscribe(data => {
      this.teams = data;
      console.log(data);
    });



  }

  deleteReferee() {  
    // this.refereeService.deleteReferee(this.deleteUserID) 
    // .subscribe(  
    //   data => {  
    //     // console.log(data);  
    //     this.viewAllUsers();

    //   },  
    //   error => console.log(error)); 
    // this.closeModal();
    // this.refreshPage();
  }


  confirmDeletion(id: String) {  
    // this.deleteUserID = id;
    // this.refereeService.findRefereeByID(id) 
    // .subscribe(  
    //   data => {  
    //     this.deleteRef = data;
    //     this.deleteRef = Array.of(this.deleteRef);  
    //   },  
    //   error => console.log(error));  

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
      // console.log("firstname" + this.findRef.email); 
        // this.teamFound = Array.of(this.teamFound);
        // console.log(data);   

        // this.verifyTeam.teamID = this.viewUserID;
        // this.verifyTeam.firstName = this.teamFound.firstName;
        // this.verifyUser.lastName = this.findRef.lastName;
        // this.verifyUser.email = this.findRef.email;
        // this.verifyUser.contactNo = this.findRef.contactNo;
        // // this.verifyUser.username = this.findRef.username;
        // // this.verifyUser.password = this.findRef.password;
        // this.verifyUser.address = this.findRef.address;
        // this.verifyUser.city = this.findRef.city;
        // this.verifyUser.country = this.findRef.country;
        // this.verifyUser.roleID = this.findRef.roleID;
        let verify1Team = Object.assign({}, this.teamFound2, { verified: true });
        this.teamService.updateTeam(verify1Team).subscribe(  
          data => {       
            console.log(data);
            this.closeModal();
            this.refreshPage(); 

          }, error => console.log(error));
        },  
      error => console.log(error)); 
        
        // this.verifyTeam = this.teamFound2;
        // this.verifyTeam = JSON.parse(JSON.stringify(this.teamFound2));
        
        // this.verify1Team.status = true; 

        // this.teamService.updateTeam(verify1Team).subscribe(  
        //   data => {       
        //     console.log(data);
        //     // this.closeModal();
        //     // this.refreshPage(); 

        //   }, error => console.log(error));

      



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



}