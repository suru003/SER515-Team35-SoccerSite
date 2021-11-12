import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'teamDirectorDashboard',
  templateUrl: './teamDirectorDashboard.component.html',
  styleUrls: ['./teamDirectorDashboard.component.css']
})
export class TeamDirectorComponent implements OnInit{
  // title: string;
  actionChoice: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    // this.title = 'All Users';
  }


  ngOnInit(): void {
    this.allVerifiedTeams();
  }

  onSubmit(actionForm: NgForm){
    if(this.actionChoice === 'View Matches') {
      // this.viewMatches();
    } else if(this.actionChoice === 'Manage Applications'){
      this.allNewApplications();
    } else if(this.actionChoice === 'Add Team'){
      // this.addRef();
    }
  }

allVerifiedTeams(){
    // this.router.navigate(['refereeUserList'], {relativeTo:this.route});
    this.router.navigate(['teamsList'], {relativeTo:this.route});
  }

allNewApplications(){
    this.router.navigate(['teamNewApplicationList'], {relativeTo:this.route});
  }

addRef(){
    // this.router.navigate(['addReferee'], {relativeTo:this.route});
  }

  viewMatches(){
    // this.router.navigate(['viewMatches'], {relativeTo:this.route});
  }
}
