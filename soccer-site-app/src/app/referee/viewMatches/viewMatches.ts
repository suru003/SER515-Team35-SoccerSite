import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Referee } from '../../../models/referee';
import { Users } from '../../../models/users';
import { Roles } from '../../../models/roles';
import { Matches } from 'src/models/matches';
import { ActivatedRoute, Router } from '@angular/router';
import { RefereeDirectorService } from '../../services/refereeDirector.service';

// models
import { Team  } from '../../../models/team';
import { MatchesSchedule  } from '../../../models/matchesSchedule';
import { Category  } from '../../../models/category';
import { Field  } from '../../../models/field';

// services
import { TeamService } from '../../services/team.service';
import { MatchScheduleService } from '../../services/matchSchedule.service';

declare var $: any;

@Component({
  selector: 'app-view-matches',
  templateUrl: './viewMatches.html',
  styleUrls: ['./viewMatches.css']
})
export class ViewMatches {

  // declare var $: any;
  referee: Referee;
  roles: Roles[] = [];
  matches: Matches[]= [];
  title: string;
  showMsg: boolean = false;
  selectedRole = null;
  createReferee:any;
  allRefs:any;
  // refereeSelected:any;

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

  matchIDToAssignReferee!:String;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: RefereeDirectorService,
    private teamService: TeamService,
    private matchService : MatchScheduleService) {
    this.referee = new Referee();
    this.title="Matches Schedule";
    this.schedule = new MatchesSchedule(new Category(),"", new Field(), new Team(), "", new Team(), "", "","");
  }

  ngOnInit() {
   this.getMatches();

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

   this.adminService.findByStatus("VERIFIED").subscribe(data => {
      this.allRefs = data;
      console.log(data);
    });
 }


 getMatches() {
  this.adminService.findAllMatches().subscribe(
    data => {
      this.matches = data;
      console.log(data);
    });

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

assignReferee(id: String){
  this.matchIDToAssignReferee = id;

  this.matchService.getScheduleById(id).subscribe(data => {
      this.schedule = data;
      console.log(data);
    })
}

onSubmit(assignRefereeForm: NgForm){
  // this.schedule.referee = this.refereeSelected;
  this.matchService.updateSchedule(this.schedule).subscribe(data => {
      this.schedule = data;
      console.log(data);
    });

  this.schedule.referee.assigned = true;
  this.adminService.updateReferee(this.schedule.referee).subscribe(data => {
      this.schedule = data;
      console.log(data);
    })
  console.log(this.schedule);

}



}