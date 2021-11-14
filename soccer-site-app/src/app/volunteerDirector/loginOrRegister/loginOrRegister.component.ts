import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


// models
import { Volunteer } from '../../../models/volunteer';
import { Roles } from '../../../models/roles';

// services
import { VolunteerDirectorService } from '../../services/volunteerDirector.service';

declare var $: any;

@Component({
  selector: 'volunteerLoginOrRegister',
  templateUrl: './loginOrRegister.component.html',
  styleUrls: ['./loginOrRegister.component.css']
})
export class VolunteerDirectorLoginOrRegisterComponent {
  // title: string;

  volunteer: Volunteer;
  roles: Roles[] = [];
  title: string;
  showMsg: boolean = false;
  selectedRole = null;
  createVolunteer:any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: VolunteerDirectorService) {
    this.volunteer = new Volunteer();
    // this.user = new Users();
    this.title = 'Register Volunteer';
    
  }

  ngOnInit() {
    this.getRoles();
  }

  onSubmit(volunteerForm: NgForm) {
    this.volunteer.status = 'NEW';
    this.volunteer.roleID=2;
    this.adminService.createVolunteer(this.volunteer).subscribe(
      data => {
        this.createVolunteer = data;
        this.createVolunteer = Array.of(this.createVolunteer);
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
