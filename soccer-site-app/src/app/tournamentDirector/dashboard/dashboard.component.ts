import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

// services
import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'tournamentDirectorDashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class TournamentDirectorDashboardComponent implements OnInit{

  tournamentDirectorID!:String;
   actionChoice: string = '';
  newApplications!:any;
  verifiedApplications!:any;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private sharedService: SharedService) {}


  // ngOnInit(){
  //   this.sharedService.sharedManagerID.subscribe(
  //     data => {
  //       this.tournamentDirectorID= data;
  //     },
  //     error => console.log(error));
  //     this.allTournaments();
  // }

  ngOnInit(){
    console.log("shared service is "+this.sharedService.sharedDirectorID);
    this.sharedService.sharedDirectorID.subscribe(
      data => {
        this.tournamentDirectorID= data;
        console.log(this.tournamentDirectorID);
      },
      error => console.log(error));
      this.allTournaments();
  }

    onSubmit(actionForm: NgForm){
    if(this.actionChoice === 'View Matches') {
      // this.viewMatches();
    } else if(this.actionChoice === 'Manage Applications'){
      // this.allNewApplications();
    } else if(this.actionChoice === 'Add Referees'){
      // this.addRef();
    }
  }

allTournaments(){
    this.router.navigate(['tournamentList'], {relativeTo:this.route});
  }


addTournament(){
    this.router.navigate(['addTournament'], {relativeTo:this.route});
  }

  viewRefereeDirectorDashboard(){
    this.router.navigate(['refereeDirectorHomepage'], {relativeTo:this.route});
  }

  tournamentFees(){
    this.router.navigate(['tournamentFee'], {relativeTo:this.route});
  }
}
