import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {NgForm} from '@angular/forms';


//services
import { RefereeDirectorService } from '../../services/refereeDirector.service';
import { SharedService } from "../../services/shared.service";
import { MatchScheduleService } from '../../services/matchSchedule.service';



@Component({
  selector: 'refereeHomepage',
  templateUrl: './refereeHomepage.component.html',
  styleUrls: ['./refereeHomepage.component.css']
})
export class RefereeDashboardComponent implements OnInit{
  // title: string;
  actionChoice: string = '';
  newApplications!:any;
  verifiedApplications!:any;

teamDirectorID!:String;
  refereeData:any;
  schedule:any;


  constructor(private route: ActivatedRoute, 
    private router: Router,
    private refereeService: RefereeDirectorService,
     private sharedService: SharedService,
     private scheduleService: MatchScheduleService) {
    // this.title = 'All Users';
  }


  ngOnInit(): void {
    console.log(this.teamDirectorID);
    this.sharedService.sharedDirectorID.subscribe(
      data => {
        this.teamDirectorID= data;
      },
      error => console.log(error));

    this.refereeService.findRefereeByID(this.teamDirectorID).subscribe(
      data => {
        this.refereeData= data;
        console.log(this.refereeData);
      },
      error => console.log(error));

    this.scheduleService.getMatchesScheduleByReferee(this.teamDirectorID).subscribe(
      data => {
        this.schedule= data;
        console.log(this.schedule);
      },
      error => console.log(error));
  
  }

  onSubmit(actionForm: NgForm){
    if(this.actionChoice === 'View Matches') {
      this.viewMatches();
    } else if(this.actionChoice === 'Manage Applications'){
      this.allNewApplications();
    } else if(this.actionChoice === 'Add Referees'){
      this.addRef();
    }
  }

  allRefs(){
    this.router.navigate(['refereeUserList'], {relativeTo:this.route});
  }

  allNewApplications(){
    this.router.navigate(['refereeNewApplicationList'], {relativeTo:this.route});
  }

  addRef(){
    this.router.navigate(['addReferee'], {relativeTo:this.route});
  }

viewMatches(){
    this.router.navigate(['viewMatches'], {relativeTo:this.route});
  }
}
