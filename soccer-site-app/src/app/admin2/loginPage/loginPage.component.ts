import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';

// service
import { Admin2Service } from '../../services/admin2.service';
import { TournamentDirectorService } from '../../services/tournamentDirector.service';
import { SharedService } from "../../services/shared.service";

// models
import { Admin2 } from '../../../models/admin2';
import { TournamentDirector } from '../../../models/tournamentDirector';

@Component({
  selector: 'allDirectorLoginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class AllDirectorLoginPageComponent implements OnInit{
  // title: string;
  directorID: string = '';
  adminFound!:any;
  adminDirectorID!:String;

  // tournamentDirectorID!:String;
  // tournamentDirector: TournamentDirector = new TournamentDirector();
  isLoggedIn: boolean = false;
  // director!:TournamentDirector;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    // private tournamentDirectorService: TournamentDirectorService,
    private adminService: Admin2Service,
    private sharedService: SharedService
    ) {
    // this.adminFound = new Admin2();
  }


  ngOnInit(){
    this.sharedService.sharedDirectorID.subscribe(
      data => (this.adminDirectorID = data));
  }


  // formdata=new FormGroup({  
  //   tournamentDirectorID:new FormControl(),  
  // }); 

  // get managerID(){  
  //   return this.formdata.get('tournamentDirectorID');  
  // } 


  // onSubmit(){
  //  this.tournamentDirectorService.findTournamentDirectorByID(
  //   this.managerID!.value).subscribe(
  //   data => {
  //     this.director = data;
  //     this.sharedService.setTournamentDirectorID(this.managerID!.value);
  //     this.isLoggedIn = true;
  //     this.directorDashboard();
  //   },
  //   error => console.log(error));

  // }

   onSubmit(){
   this.adminService.findDirectorByID(
    this.directorID).subscribe(
    data => {
      this.adminFound = data;
      
      this.sharedService.setDirectorID(this.adminFound.userID);
      this.sharedService.setDirectorFound(this.adminFound);
      console.log("User id: " + this.adminFound.userID);
      // this.isLoggedIn = true;
      if(this.adminFound.roleName == 'Tournament Director'){
        this.tournamentDirectorDashboard();
      }
      else if(this.adminFound.roleName == 'Referee Director'){
        this.refereeDirectorDashboard();
      }else if(this.adminFound.roleName == 'Team Director'){
        this.teamDirectorDashboard();
      }
    },
    error => console.log(error));

  }

  tournamentDirectorDashboard() {
    this.router.navigate(['/tournamentDirectorDashboard']);
  }

  refereeDirectorDashboard() {
    this.router.navigate(['/refereeDirectorHomepage']);
  }

  teamDirectorDashboard() {
    this.router.navigate(['/teamDirectorDashboard']);
  }

   // authenticate (){
   // }

   



 }

