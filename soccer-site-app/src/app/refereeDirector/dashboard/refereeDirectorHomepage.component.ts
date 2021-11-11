import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'refereeDirectorHomepage',
  templateUrl: './refereeDirectorHomepage.component.html',
  styleUrls: ['./refereeDirectorHomepage.component.css']
})
export class RefereeDirectorComponent implements OnInit{
  // title: string;

  constructor(private route: ActivatedRoute, private router: Router) {


    // this.title = 'All Users';
  }


  ngOnInit(): void {
    this.allRefs();
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
