import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


// models
import { Referee } from '../../../models/referee';

// services
import { TeamService } from '../../services/team.service';

declare var $: any;

@Component({
  selector: 'searchMatchesResults',
  templateUrl: './searchResults.component.html',
  styleUrls: ['./searchResults.component.css']
})
export class SearchResultsComponent {
  // title: string;

  // referee: Referee;
  // roles: Roles[] = [];
  // title: string;
  // showMsg: boolean = false;
  // selectedRole = null;
  // createReferee:any;

   divisions:any;

   searchByDivision: string = '';
  searchByDate: string = '';
  searchByVenue: string = '';
  searchByTeam: string = '';
  searchByClub: string = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private teamService: TeamService) {
    // this.team = new Team();
    // this.user = new Users();
    // this.title = 'Register Referee';
    
  }

  ngOnInit() {
    // this.getRoles();
    this.getDivisions();
  }

    getDivisions() {
    this.teamService.findAllDivisions().subscribe(
      data => {
        this.divisions = data;
        // console.log(data);
      });

  }

  onSubmit(searchMatchScheduleForm: NgForm) {
    // this.referee.status = 'NEW';
    // this.referee.roleID=2;
    // this.adminService.createReferee(this.referee).subscribe(
    //   data => {
    //     this.createReferee = data;
    //     this.createReferee = Array.of(this.createReferee);
    //     // this.viewAllUsers();
    //   });

    // $('#user-creation-modal').modal('show');

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
