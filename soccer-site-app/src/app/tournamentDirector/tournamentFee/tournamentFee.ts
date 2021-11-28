import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Referee } from '../../../models/referee';
import { Users } from '../../../models/users';
import { Roles } from '../../../models/roles';
import { Matches } from 'src/models/matches';
import { ActivatedRoute, Router } from '@angular/router';
import {TournamentFee} from '../../../models/tournamentFee'
import { TournamentDirector } from 'src/models/tournamentDirector';
import { TournamentDirectorService } from 'src/app/services/tournamentDirector.service';
import { TournamentService } from 'src/app/services/tournament.service';

declare var $: any;

@Component({
  selector: 'tournamentFee',
  templateUrl: './tournamentFee.html',
  styleUrls: ['./tournamentFee.css']
})
export class tournamentFee {

  // declare var $: any;
  tournamentDirector:TournamentDirector;
  roles: Roles[] = [];
  matches: Matches[]= [];
  tournamentFee: TournamentFee[];
  title: string;
  showMsg: boolean = false;
  selectedRole = null;
  createReferee:any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: TournamentDirectorService) {
    this.tournamentDirector = new TournamentDirector();
    this.title="Tournament Fees";
  }

  ngOnInit() {
     this.tournamentFees();
  }


  tournamentFees() {
      
    this.adminService.findFees().subscribe(
      data => {
        this.tournamentFee = data;
        console.log(data);
      });

  }
 

 
}