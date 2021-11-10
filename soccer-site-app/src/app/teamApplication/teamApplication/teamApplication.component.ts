import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


// models
import { Team } from '../../../models/team';

// services
import { TeamService } from '../../services/team.service';

declare var $: any;

@Component({
  selector: 'teamApplication',
  templateUrl: './teamApplication.component.html',
  styleUrls: ['./teamApplication.component.css']
})
export class TeamApplicationComponent {
  // title: string;

  team: Team;
  title: string;
  showMsg: boolean = false;
  selectedRole = null;
  createdTeam:any;

  dayDOB: string = '';
  monthDOB: string = '';
  yearDOB: string = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private teamService: TeamService) {
    this.team = new Team();
    // this.user = new Users();
    this.title = 'Register Referee';
    
  }

  ngOnInit() {
    // this.getRoles();
  }

  onSubmit(teamApplicationForm: NgForm) {
    // this.referee.status = 'NEW';
    // this.referee.roleID=2;
    // this.adminService.createReferee(this.referee).subscribe(
    //   data => {
    //     this.createReferee = data;
    //     this.createReferee = Array.of(this.createReferee);
    //     // this.viewAllUsers();
    //   });

    // $('#user-creation-modal').modal('show');
    this.team.status = false;
    this.team.oldestDOB= this.dayDOB + "-" + this.monthDOB + "-" + this.yearDOB;
    // this.referee.roleID=2;
    this.teamService.addTeam(this.team).subscribe(
      data => {
        this.createdTeam = data;
        this.createdTeam = Array.of(this.createdTeam);
        // this.viewAllUsers();
      });

    $('#user-creation-modal').modal('show');

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
