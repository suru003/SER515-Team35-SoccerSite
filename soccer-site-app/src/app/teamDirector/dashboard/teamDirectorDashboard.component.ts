import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

// models
import { Admin2 } from '../../../models/admin2';
import { Team  } from '../../../models/team';

// services
import { SharedService } from "../../services/shared.service";
import { TeamService } from "../../services/team.service";
import { Admin2Service } from "../../services/admin2.service";

@Component({
  selector: 'teamDirectorDashboard',
  templateUrl: './teamDirectorDashboard.component.html',
  styleUrls: ['./teamDirectorDashboard.component.css']
})
export class TeamDirectorComponent implements OnInit{
  // title: string;
  actionChoice: string = '';
  teamDirectorID!:String;
  // directorFound!:any;
  newApplications:Team[] = [];
  verifiedApplications:Team[] = [];

  director!:any;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private sharedService: SharedService,
    private adminService: Admin2Service,
    private teamService: TeamService
    ) {
    // this.title = 'All Users';
  }


  ngOnInit(): void {
    this.sharedService.sharedDirectorID.subscribe(
      data => {
        this.teamDirectorID= data;
      },
      error => console.log(error));
    
    this.sharedService.sharedDirector.subscribe(
          data => {
            this.director= data;
          },
          error => console.log(error));

    // this.adminService.findDirectorByID(this.teamDirectorID).subscribe(data => {
    //   this.directorFound = data;
    //   // console.log(data);
    // },
    // error => console.log(error));

    this.teamService.findByisVerifiedFalse().subscribe(data => {
      this.newApplications = data;
      // console.log(data);
    });

    this.teamService.findByisVerifiedTrue().subscribe(data => {
      this.verifiedApplications = data;
      // console.log(data);
    });

    this.allVerifiedTeams();
  }

  onSubmit(actionForm: NgForm){
    if(this.actionChoice === 'View Matches') {
      this.viewMatches();
    } else if(this.actionChoice === 'Manage Applications'){
      this.allNewApplications();
    } else if(this.actionChoice === 'Add Team'){
      // this.addRef();
    } else if(this.actionChoice === 'Schedule Matches'){
      this.scheduleMatch();

    } else{

    }
  }

scheduleMatch(){
  this.router.navigate(['scheduleMatches'], {relativeTo:this.route});
}

viewMatches(){
    this.router.navigate(['viewMatchList'], {relativeTo:this.route});
  }


allVerifiedTeams(){
    this.router.navigate(['teamsList'], {relativeTo:this.route});
  }


allNewApplications(){
    this.router.navigate(['teamNewApplicationList'], {relativeTo:this.route});
  }

addRef(){
    // this.router.navigate(['addReferee'], {relativeTo:this.route});
  }


}
