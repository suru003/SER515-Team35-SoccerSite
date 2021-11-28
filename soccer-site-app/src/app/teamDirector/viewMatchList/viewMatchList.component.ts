import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

// models
import { Team  } from '../../../models/team';
import { MatchesSchedule  } from '../../../models/matchesSchedule';
import { Category  } from '../../../models/category';
import { Field  } from '../../../models/field';

// services
import { TeamService } from '../../services/team.service';
import { MatchScheduleService } from '../../services/matchSchedule.service';

@Component({
  selector: 'viewMatchList',
  templateUrl: './viewMatchList.component.html',
  styleUrls: ['./viewMatchList.component.css']
})
export class ViewMatchesComponent implements OnInit {
  @ViewChild('close') close: ElementRef;

  // admins: Admin2[] = [];
  teams: Team[] = [];
  title: string;
  deleteTeamFound: any;
  deleteTeamID!:String;


  updateScheduleID!:String;
  scheduleFound:any;
  schedule:any;
  allDivisions:any;
  allMatches:any;
  allTeams:any;
  allFields:any;

  selectedValue!:Number;
  divisionFilter!:String;
  timeFilter!:String;
  fieldFilter!:String;
  dateFilter!:Number;
  

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private teamService: TeamService,
    private matchService : MatchScheduleService) {
   this.title = 'All Matches';
     // this.newReferee = new Referee();
     this.schedule = new MatchesSchedule(new Category(),"", new Field(), new Team(), "", new Team(), "", "","");
   }

   ngOnInit() {

    this.teamService.getAllMatches().subscribe(data => {
      this.allMatches = data;
      // console.log(data);
    });

    this.matchService.findAllDivisions().subscribe(data => {
      this.allDivisions = data;
      // console.log(data);
    });

    this.teamService.getAllTeams().subscribe(data => {
      this.allTeams = data;
      // console.log(data);
    });

    this.matchService.getAllFields().subscribe(data => {
      this.allFields = data;
      // console.log(data);
    });

  }

  deleteSchedule() {  
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



  updateSchedule(id: String){
    this.updateScheduleID = id;
    // console.log("id is:" + id);
    // this.getRoles();
    
    this.matchService.getScheduleById(this.updateScheduleID)  
    .subscribe(  
      data => {  
        this.scheduleFound = data;
        this.schedule = data;
        this.scheduleFound = Array.of(this.scheduleFound); 
        console.log(data);             
      },  
      error => console.log(error));  
  }

  

  // formdata=new FormGroup({  
  //   id:new FormControl(),  
  //   category:new FormControl(),
  //   time:new FormControl(),  
  //   email:new FormControl(),
  //   field:new FormControl(),
  //   homeTeam:new FormControl(),
  //   homeTeamScore:new FormControl(), 
  //   visitingTeam:new FormControl(), 
  //   visitingTeamScore:new FormControl()
  // });  

  // get refereeID(){  
  //   return this.updateUserID;  
  // }  
  
  // get category(){  
  //   return this.formdata.get('category');  
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


   onSubmit(updateForm: NgForm){
    this.schedule.id = this.updateScheduleID;

    this.matchService.updateSchedule(this.schedule).subscribe(data => {
      // this.allDivisions = data;
      console.log(data);
    });

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
   }

   onSubmitFiter(filterBy: NgForm){
    if(this.selectedValue == 1){
      this.matchService.getMatchesScheduleByDivisionId(this.divisionFilter).subscribe(data => {
      this.allMatches = data;
      console.log(data);
    });
    }else if(this.selectedValue == 2){
      console.log(this.timeFilter);
      this.matchService.getMatchesScheduleByTime(this.timeFilter).subscribe(data => {
      this.allMatches = data;
      console.log(data);
    });

    }else if(this.selectedValue == 3){
      console.log(this.timeFilter);
      this.matchService.getMatchesScheduleByFieldId(this.fieldFilter).subscribe(data => {
      this.allMatches = data;
      console.log(data);
    });

    }
   }



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