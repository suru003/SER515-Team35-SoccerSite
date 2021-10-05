import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Referee } from '../../models/referee';
import { Users } from '../../models/users';
import { Roles } from '../../models/roles';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin2Service } from '../services/admin2.service';

@Component({
  selector: 'app-add-referee',
  templateUrl: './addReferee.component.html',
  styleUrls: ['./addReferee.component.css']
})
export class AddRefereeComponent {

  // referees: Referee[] = [];
  referee: Referee;
  roles: Roles[] = [];
  title: string;
  showMsg: boolean = false;
  selectedRole = null;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: Admin2Service) {
    this.referee = new Referee();
    // this.user = new Users();
    this.title = 'Register Referee';
    
  }

  ngOnInit() {
    this.getRoles();
  }


  onSubmit(refereeForm: NgForm) {
    this.adminService.createReferee(this.referee).subscribe(result => this.viewAllUsers());

  }


  getRoles() {
    this.adminService.findAllRoles().subscribe(
      data => {
        this.roles = data;
        console.log(data);
      });

  }

  viewAllUsers() {
    this.router.navigate(['/allusers']);
  }
}