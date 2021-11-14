import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../../../models/volunteer';
import { Users } from '../../../models/users';
import { Roles } from '../../../models/roles';
import { Matches } from 'src/models/matches';
import { ActivatedRoute, Router } from '@angular/router';
import { VolunteerDirectorService } from '../../services/volunteerDirector.service';

declare var $: any;

@Component({
  selector: 'app-view-matches',
  templateUrl: './viewMatches.html',
  styleUrls: ['./viewMatches.css']
})
export class ViewMatches {

  // declare var $: any;
  volunteer: Volunteer;
  roles: Roles[] = [];
  matches: Matches[]= [];
  title: string;
  showMsg: boolean = false;
  selectedRole = null;
  createVolunteer:any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: VolunteerDirectorService) {
    this.volunteer = new Volunteer();
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