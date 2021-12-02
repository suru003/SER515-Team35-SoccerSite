import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


// models
import { Referee } from '../../../models/referee';
import { Roles } from '../../../models/roles';

// services
import { RefereeDirectorService } from '../../services/refereeDirector.service';
import { SharedService } from "../../services/shared.service";

declare var $: any;

@Component({
  selector: 'refereeLoginOrRegister',
  templateUrl: './loginOrRegister.component.html',
  styleUrls: ['./loginOrRegister.component.css']
})
export class LoginOrRegisterComponent {
  // title: string;

  referee: Referee;
  roles: Roles[] = [];
  title: string;
  showMsg: boolean = false;
  selectedRole = null;
  createReferee:any;
  directorID: string = '';
  adminFound!:any;
  adminDirectorID!:String;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: RefereeDirectorService,
    private sharedService: SharedService) {
    this.referee = new Referee();
    // this.user = new Users();
    this.title = 'Register Referee';
    
  }


  ngOnInit() {
   this.sharedService.sharedDirectorID.subscribe(
      data => (this.adminDirectorID = data));
  }

  // onSubmit(refereeForm: NgForm) {
  //   this.referee.status = 'NEW';
  //   this.referee.roleID=2;
  //   this.adminService.createReferee(this.referee).subscribe(
  //     data => {
  //       this.createReferee = data;
  //       this.createReferee = Array.of(this.createReferee);
  //       // this.viewAllUsers();
  //     });

  //   $('#user-creation-modal').modal('show');

  // }

  onSubmit(loginForm: NgForm){
    


   this.adminService.findRefereeByID(
    this.directorID).subscribe(
    data => {
      this.adminFound = data;
      this.sharedService.setDirectorID(this.directorID);
      console.log("User id: " + this.adminFound.userID);
      this.sharedService.setDirectorFound(this.adminFound);

      this.refereeDashboard();
           
    },
    error => console.log(error));

  }

  refereeDashboard() {
    this.router.navigate(['/refereeHomepage']);
  }


  // getRoles() {
  //   this.adminService.findAllRoles().subscribe(
  //     data => {
  //       this.roles = data;
  //     });

  // }

  // viewAllUsers() {
  //   $('#user-creation-modal').modal('close');
  //   this.router.navigate(['/allusers']);
  // }
}
