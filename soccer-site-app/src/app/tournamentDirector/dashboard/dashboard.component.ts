import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'tournamentDirectorDashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class TournamentDirectorDashboardComponent implements OnInit{
  // title: string;

  constructor(private route: ActivatedRoute, private router: Router) {


    // this.title = 'All Users';
  }


  ngOnInit(): void {
    this.allRefs();
  }

allRefs(){
    this.router.navigate(['referee-user-list'], {relativeTo:this.route});
  }

allNewApplications(){
    this.router.navigate(['referee-new-application-list'], {relativeTo:this.route});
  }

addRef(){
    this.router.navigate(['add-referee'], {relativeTo:this.route});
  }
}
