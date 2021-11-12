import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Referee } from '../../../models/referee';
import { Users } from '../../../models/users';
import { Roles } from '../../../models/roles';
import { Matches } from 'src/models/matches';
import { ActivatedRoute, Router } from '@angular/router';
import { RefereeDirectorService } from '../../services/refereeDirector.service';

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

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: RefereeDirectorService) {
    this.referee = new Referee();
    this.title="Matches Schedule";
  }

  ngOnInit() {
     this.getMatches();
  }


  getMatches() {
    this.adminService.findAllMatches().subscribe(
      data => {
        this.matches = data;
        console.log(data);
      });

  }
 

 
}