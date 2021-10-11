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

      console.log(this.tournamentDirectorID);
  }


   formdata=new FormGroup({  
    tournamentDirectorID:new FormControl(),  
  }); 

    get managerID(){  
    return this.formdata.get('tournamentDirectorID');  
  } 


  onSubmit(){
    this.sharedService.setTournamentDirectorID(this.managerID!.value);
    // this.sharedService.sharedManagerID.subscribe(
    //   data => {
    //     this.tournamentDirectorID = data;
    //     console.log(this.tournamentDirectorID);
    //   },
    //   error => console.log(error));
      
    this.viewAllUsers();

  }

  viewAllUsers() {
    this.router.navigate(['/tournamentDirectorDashboard']);
  }

   // authenticate (){
   // }

   



}

