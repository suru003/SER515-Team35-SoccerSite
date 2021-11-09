import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'teamDirectorDashboard',
  templateUrl: './teamDirectorDashboard.component.html',
  styleUrls: ['./teamDirectorDashboard.component.css']
})
export class TeamDirectorComponent implements OnInit{
  // title: string;

  constructor(private route: ActivatedRoute, private router: Router) {


    // this.title = 'All Users';
  }


  ngOnInit(): void {
    this.allVerifiedTeams();
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
