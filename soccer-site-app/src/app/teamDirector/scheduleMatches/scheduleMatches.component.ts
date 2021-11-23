import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
// import * as jsPDF from 'jspdf'; 

//models
import { Team  } from '../../../models/team';
import { MatchesSchedule } from "../../../models/matchesSchedule";
import { Category } from "../../../models/category";


// services
import { SharedService } from "../../services/shared.service";
import { TeamService } from '../../services/team.service';
import { MatchScheduleService } from '../../services/matchSchedule.service';

declare var $: any;

@Component({
  selector: 'scheduleMatches',
  templateUrl: './scheduleMatches.component.html',
  styleUrls: ['./scheduleMatches.component.css']
})
export class ScheduleMatchesComponent implements OnInit {
  @ViewChild('close') close: ElementRef;
  // @ViewChild('teamApplicationsTable') teamApplicationsTable: ElementRef;

  teams: Team[] = [];
  title: string;
  deleteTeamFound: any;
  deleteTeamID!:String;
  updateTeamID!:String;
  director!:any;
  

  teamFound:any; 
  teamFound2:Team = new Team(); 

  verifyTeamID!:String;
  verifyTeam: Team = new Team();

  allDivisions:any;
  divisionChosen: Category;
  date: string = '';
  type: string = '';
  teamsFoundByDivision:any;

  schedules: boolean[][];
  schedules2: boolean[];
  isScheduled:any;
  private things: Number[][];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private teamService: TeamService,
    private sharedService: SharedService,
    private matchScheduleService: MatchScheduleService) {
   this.title = 'Schedule Matches';
     // this.newReferee = new Referee();
   }

   ngOnInit() {

    this.sharedService.sharedDirector.subscribe(
      data => {
        this.director= data;
      },
      error => console.log(error));

    this.teamService.findAllDivisions()  
    .subscribe(  
      data => {  
        this.allDivisions = data; 

      },  
      error => console.log(error)); 


  }




  viewTeam(id: String){
    this.verifyTeamID = id;
    
    this.teamService.getTeam(id)  
    .subscribe(  
      data => {  
        this.teamFound = data; 
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


  // onSubmit(scheduleForm: NgForm){
  //   this.teamService.findByDivision(this.divisionChosen.categoryName)  
  //   .subscribe(  
  //     data => {  
  //       this.teamsFoundByDivision = data; 
  //       this.schedules = [];
  //       this.isScheduled = [false,false,false,false];

  //       for(var i: number = 0; i < 4; i++) {
  //         this.schedules[i] = [];
  //         for(var j: number = 0; j< 4; j++) {
  //           if(i==j){
  //             this.schedules[i][j] = true;
  //           }
  //           else{this.schedules[i][j] = false;}

  //         }
  //       }


  //       for(let i = 0; i < 4; i++) {
  //         for(let j = 0; j< 4; j++) {
  //           if(i==j){

  //           }
  //           else{
  //             if(this.isScheduled[i] == false && this.isScheduled[j] == false && this.schedules[i][j] == false){
  //               var match = new MatchesSchedule(this.divisionChosen, "9:00", "Field-A", 
  //                 this.teamsFoundByDivision[i], "0", this.teamsFoundByDivision[j], "0", this.type, this.date);
  //               this.schedules[i][j] = true;
  //               this.schedules[j][i] = true;
  //               this.isScheduled[i] = true;
  //               this.isScheduled[j] = true;

  //               this.matchScheduleService.addMatchesSchedule(match).subscribe(  
  //                 data => {
  //                   console.log("match data " + data);
  //                 }, 
  //                 error => console.log(error)
  //                 );
  //               break;
  //             }
  //                 // this.schedules[i][j] = false;
  //               }
                
  //             }
  //           }

  //           console.log(this.schedules)

  //         },  
  //         error => console.log(error));  
  // }

    onSubmit2(scheduleForm: NgForm){
    this.teamService.findByDivision(this.divisionChosen.categoryName)  
    .subscribe(  
      data => {  
        this.teamsFoundByDivision = data; 
        this.schedules2 = [false,false,false,false];


        for(let i = 0; i < 4; i++) {
          for(let j = 0; j< 4; j++) {
            console.log("[" + i + "]" + "[" + j + "]")
            if(i==j){
              

            } else if(this.schedules2[i] == true){
                  break;
                }
            else{
              if(this.schedules2[i] == false && this.schedules2[j] == false ){
                var match = new MatchesSchedule(this.divisionChosen, "9:00", "Field-A", 
                  this.teamsFoundByDivision[i], "0", this.teamsFoundByDivision[j], "0", this.type, this.date);
                this.schedules2[i] = true;
                this.schedules2[j] = true;
                // console.log("[" + i + "]" + "[" + j + "]")

                this.matchScheduleService.addMatchesSchedule(match).subscribe(  
                  data => {
                    console.log("match data " + data);
                  }, 
                  error => console.log(error)
                  );
                break;
              }
                  // this.schedules[i][j] = false;
                }
               
                
              }
            }

            console.log(this.schedules)

          },  
          error => console.log(error));  
  }





  closeModal(){
    this.close.nativeElement.click();
  }

  refreshPage(){
    window.location.reload();
  }


  viewPendingTeams() {
    this.router.navigate(['/teamNewApplicationList']);
  }

  allNewApplications(){
    this.router.navigate(['teamNewApplicationList'], {relativeTo:this.route});
  }

  allVerifiedTeams(){
    this.router.navigate(['teamsList'], {relativeTo:this.route});
  }


  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);

  }

}