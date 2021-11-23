import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// models
import { TournamentDirector } from '../../../models/tournamentDirector';
import { Category } from '../../../models/category';
import { Tournament } from '../../../models/tournament';

// services
import { TournamentDirectorService } from '../../services/tournamentDirector.service';
import { SharedService } from "../../services/shared.service";


declare var $: any;

@Component({
  selector: 'teamsDashboard',
  templateUrl: './teamsDashboard.component.html',
  styleUrls: ['./teamsDashboard.component.css']
})
export class TeamsDashboardComponent {
active = 1;
categories: Category[] = [];
tournamentDirectorID!:string;
tournaments: Tournament[] = [];

  // declare var $: any;
  // referee: Referee;
  // roles: Roles[] = [];
  // title: string;
  // showMsg: boolean = false;
  // selectedRole = null;
  // createReferee:any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private tournamentDirectorService: TournamentDirectorService,
    private sharedService: SharedService) {

    
  }

  ngOnInit() {
 
  this.tournamentDirectorService.findAllCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    });

    this.sharedService.sharedManagerID.subscribe(
      data => {
        this.tournamentDirectorID= data;
        // console.log("tournamen ID on addTournament is"+this.tournamentDirectorID);
      },
      error => console.log(error));

     this.tournamentDirectorService.findAllTournaments(
          this.tournamentDirectorID).subscribe(data => {
            this.tournaments = data;
      // console.log(this.tournaments);
    });

  }

  allTournaments(){
    this.router.navigate(['tournamentDirectorDashboard']);
  }


addTournament(){
    this.router.navigate(['addTournament']);
  }

  tournamenFee(){
    this.router.navigate(['tournamentFee']);
  }


  // onSubmit(refereeForm: NgForm) {
  //   this.referee.status = 'NEW';
  //   this.adminService.createReferee(this.referee).subscribe(
  //     data => {
  //       this.createReferee = data;
  //       this.createReferee = Array.of(this.createReferee);
  //       // this.viewAllUsers();
  //     });

  //   $('#user-creation-modal').modal('show');

  // }


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