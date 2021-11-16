import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


// models
import { Referee } from '../../../models/referee';

// services
import { TeamService } from '../../services/team.service';
import { MatchScheduleService } from '../../services/matchSchedule.service';

declare var $: any;

@Component({
  selector: 'searchMatchSchedule',
  templateUrl: './searchMatchSchedule.component.html',
  styleUrls: ['./searchMatchSchedule.component.css']
})
export class SearchMatchScheduleComponent {
  // title: string;

  // referee: Referee;
  // roles: Roles[] = [];
  // title: string;
  // showMsg: boolean = false;
  // selectedRole = null;
  // createReferee:any;

  divisions:any;
  allTeams:any;
  teams!:any;
  scheduleByDivision:any;

  searchByDivision: string = '';
  searchByDate: string = '';
  searchByVenue: string = '';
  searchByTeam: string = '';
  searchByClub: string = '';
  searchTeamByDivision: string = '';

  noSearch:boolean = true;
  noScoreSearch:boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private teamService: TeamService,
    private scheduleService: MatchScheduleService) {
    // this.team = new Team();
    // this.user = new Users();
    // this.title = 'Register Referee';
    
  }

  ngOnInit() {
    // this.getRoles();
    this.getDivisions();
    this.getAllTeams();
  }

  getDivisions() {
    this.teamService.findAllDivisions().subscribe(
      data => {
        this.divisions = data;
        // console.log(data);
      });

  }

  getAllTeams() {
    this.teamService.getAllTeams().subscribe(
      data => {
        this.allTeams = data;
        // console.log(data);
      });

  }

  onSubmit(searchMatchScheduleForm: NgForm) {
    this.noScoreSearch = false;
    this.noSearch = true;

    if(this.searchByDivision != ""){
      this.scheduleService.getMatchesScheduleByDivision(this.searchByDivision).subscribe(
        data => {
          this.scheduleByDivision = data;
        // console.log(data);
      });
    }
    else if(this.searchByTeam != ""){
      this.scheduleService.getMatchesScheduleByTeam(this.searchByTeam).subscribe(
        data => {
          this.scheduleByDivision = data;
        // console.log(data);
      });
    }
    else if(this.searchByDate != ""){
      this.scheduleService.getMatchesScheduleByDate(this.searchByDate).subscribe(
        data => {
          this.scheduleByDivision = data;
        console.log(data);
      });
    }
    else if(this.searchByVenue != ""){
      this.scheduleService.getMatchesScheduleByVenue(this.searchByVenue).subscribe(
        data => {
          this.scheduleByDivision = data;
        // console.log(data);
      });
    }
    // else if ((this.searchByDivision == "")&&(this.searchByTeam == "")){

    // }


  }

  onSubmitSearchTeams(searchAcceptedTeamsForm: NgForm) {
    this.noSearch = false;
    this.noScoreSearch = true;
    this.teamService.getAcceptedTeam(this.searchTeamByDivision).subscribe(
      data => {
        this.teams = data;
        // console.log(data);
      });

  }

  goBack(){
    this.noSearch = true;
    this.noScoreSearch = true;
  }


  // getRoles() {
  //   this.adminService.findAllRoles().subscribe(
  //     data => {
  //       this.roles = data;
  //       // console.log(data);
  //     });

  // }

  // viewAllUsers() {
  //   $('#user-creation-modal').modal('close');
  //   this.router.navigate(['/allusers']);
  // }
}
