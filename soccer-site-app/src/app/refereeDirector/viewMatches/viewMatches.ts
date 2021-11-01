import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Referee } from '../../../models/referee';
import { Users } from '../../../models/users';
import { Roles } from '../../../models/roles';
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
  title: string;
  showMsg: boolean = false;
  selectedRole = null;
  createReferee:any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: RefereeDirectorService) {
    this.referee = new Referee();
  }

  ngOnInit() {
   // this.getMatches();
  }


  onSubmit(refereeForm: NgForm) {
    

    $('#user-creation-modal').modal('show');

  }


  getMatches() {
    this.adminService.findAllRoles().subscribe(
      data => {
        this.roles = data;
        // console.log(data);
      });

  }

 
}