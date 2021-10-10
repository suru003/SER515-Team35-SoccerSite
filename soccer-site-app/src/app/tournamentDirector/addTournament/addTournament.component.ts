import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Component, OnInit } from '@angular/core';

import { Tournament } from '../../../models/tournament';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentDirectorService } from '../../services/tournamentDirector.service';

declare var $: any;

@Component({
  selector: 'addTournament',
  templateUrl: './addTournament.component.html',
  styleUrls: ['./addTournament.component.css']
})
export class AddTournamentComponent implements OnInit{

  title!:String;
  tournament: Tournament = new Tournament();
  // referee: Referee;
  // roles: Roles[] = [];
  // title: string;
  // showMsg: boolean = false;
  // selectedRole = null;
  // createReferee:any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private tournamentDirectorService: TournamentDirectorService) {
    // this.referee = new Referee();
    // this.user = new Users();
    this.title = 'Add Tournament';
    
  }


  ngOnInit() {

    }


onSubmit(){

}


  formdata=new FormGroup({  
    id:new FormControl(),  
    tournamentName:new FormControl(),
    category:new FormControl(),  
    startDate:new FormControl(),
    endDate:new FormControl(),
    // username:new FormControl(),  
    // password:new FormControl(),
    // address:new FormControl(),
    // city:new FormControl(), 
    // country:new FormControl(), 
    // roleID:new FormControl()
  });  

  // get refereeID(){  
  //   return this.updateUserID;  
  // }  
  
  get tournamentName(){  
    return this.formdata.get('tournamentName');  
  }  
  
  get startDate(){  
    return this.formdata.get('startDate');  
  }  
  
  get endDate(){  
    return this.formdata.get('endDate');  
  }  

  get category(){  
    return this.formdata.get('category');  
  }

  // get tournamentManagerID(){  
  //   return this.formdata.get('username');  
  // }

  // get refereePassword(){  
  //   return this.formdata.get('password');  
  // }

  // get refereeAddress(){  
  //   return this.formdata.get('address');  
  // }

  // get refereeCity(){  
  //   return this.formdata.get('city');  
  // }

  // get refereeCountry(){  
  //   return this.formdata.get('country');  
  // }

  // get refereeRoleID(){  
  //   return this.formdata.get('roleID');  
  // }

  // ngOnInit() {
  //   this.getRoles();
  // }


  // onSubmit(refereeForm: NgForm) {
  //   this.referee.status = 'NEW';
  //   this.adminService.createReferee(this.referee).subscribe(
  //     data => {
  //       this.createReferee = data;
  //       this.createReferee = Array.of(this.createReferee);
  //       // this.viewAllUsers();
  //     });

  //   $('#user-creation-modal').modal('show');

  // }


  // getRoles() {
  //   this.adminService.findAllRoles().subscribe(
  //     data => {
  //       this.roles = data;
  //       console.log(data);
  //     });

  // }

  // viewAllUsers() {
  //   $('#user-creation-modal').modal('close');
  //   this.router.navigate(['/allusers']);
  // }
}