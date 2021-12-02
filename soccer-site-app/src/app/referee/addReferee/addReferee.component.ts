import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Referee } from '../../../models/referee';
import { Users } from '../../../models/users';
import { Roles } from '../../../models/roles';
import { ActivatedRoute, Router } from '@angular/router';
import { RefereeDirectorService } from '../../services/refereeDirector.service';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
  selector: 'addReferee',
  templateUrl: './addReferee.component.html',
  styleUrls: ['./addReferee.component.css']
})
export class AddRefereeComponent {
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
    // this.user = new Users();
    this.title = 'Register Referee';
    
  }

  ngOnInit() {
    this.getRoles();
  }


  onSubmit(refereeForm: NgForm) {
    this.referee.status = 'NEW';
    this.referee.roleID = 2;
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

  viewAllReferees() {
    $('#user-creation-modal').modal('hide');
    // this.router.navigate(['/refereeNewApplicationList']);
    this.refreshPage();
  }

//   closeModal(){
//   this.close.nativeElement.click();
// }


  refreshPage(){
    window.location.reload();
  }
}