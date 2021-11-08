import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


// models
import { Referee } from '../../../models/referee';
import { Roles } from '../../../models/roles';

// services
import { RefereeDirectorService } from '../../services/refereeDirector.service';

declare var $: any;

@Component({
  selector: 'teamLoginOrRegister',
  templateUrl: './loginOrRegister.component.html',
  styleUrls: ['./loginOrRegister.component.css']
})
export class TeamLoginOrRegisterComponent {
  // title: string;

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
    // this.user = new Users();
    this.title = 'Register Referee';
    
  }

  ngOnInit() {
    this.getRoles();
  }

  onSubmit(refereeForm: NgForm) {
    this.referee.status = 'NEW';
    this.referee.roleID=2;
    this.adminService.createReferee(this.referee).subscribe(
      data => {
        this.createReferee = data;
        this.createReferee = Array.of(this.createReferee);
        // this.viewAllUsers();
      });

    $('#user-creation-modal').modal('show');

  }


  getRoles() {
    this.adminService.findAllRoles().subscribe(
      data => {
        this.roles = data;
        // console.log(data);
      });

  }

  viewAllUsers() {
    $('#user-creation-modal').modal('close');
    this.router.navigate(['/allusers']);
  }
}
