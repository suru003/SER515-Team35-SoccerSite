import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

// services
import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'tournamentDirectorDashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class TournamentDirectorDashboardComponent implements OnInit{

  tournamentDirectorID!:String;

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
