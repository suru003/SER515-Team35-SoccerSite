import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';

// service
import { TournamentDirectorService } from '../../services/tournamentDirector.service';
import { SharedService } from "../../services/shared.service";

// models
import { TournamentDirector } from '../../../models/tournamentDirector';

@Component({
  selector: 'tournamentDirectorLoginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class TournamentDirectorLoginPageComponent implements OnInit{
  // title: string;

  tournamentDirectorID!:String;
  tournamentDirector: TournamentDirector = new TournamentDirector();
  isLoggedIn: boolean = false;
  director!:TournamentDirector;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private tournamentDirectorService: TournamentDirectorService,
    private sharedService: SharedService
    ) {
  }


  ngOnInit(){
    this.sharedService.sharedManagerID.subscribe(
      data => (this.tournamentDirectorID = data));

    // console.log(this.tournamentDirectorID);
  }


  formdata=new FormGroup({  
    tournamentDirectorID:new FormControl(),  
  }); 

  get managerID(){  
    return this.formdata.get('tournamentDirectorID');  
  } 


  onSubmit(){
   this.tournamentDirectorService.findTournamentDirectorByID(
    this.managerID!.value).subscribe(
    data => {
      this.director = data;
      this.sharedService.setTournamentDirectorID(this.managerID!.value);
      this.isLoggedIn = true;
      this.directorDashboard();
    },
    error => console.log(error));

    // this.directorDashboard();

  }

  directorDashboard() {
    this.router.navigate(['/tournamentDirectorDashboard']);
  }

   // authenticate (){
   // }

   



 }

