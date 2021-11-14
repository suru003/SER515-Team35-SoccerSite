import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../../../models/volunteer';
import { Users } from '../../../models/users';
import { Roles } from '../../../models/roles';
import { ActivatedRoute, Router } from '@angular/router';
import { VolunteerDirectorService } from '../../services/volunteerDirector.service';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
  selector: 'addVolunteer',
  templateUrl: './addVolunteer.component.html',
  styleUrls: ['./addVolunteer.component.css']
})
export class AddVolunteerComponent {
  // declare var $: any;
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
    this.volunteer.roleID = 2;
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

  viewAllVolunteers() {
    $('#user-creation-modal').modal('hide');
    // this.router.navigate(['/volunteerNewApplicationList']);
    this.refreshPage();
  }

//   closeModal(){
//   this.close.nativeElement.click();
// }


  refreshPage(){
    window.location.reload();
  }
}