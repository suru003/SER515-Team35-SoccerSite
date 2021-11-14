import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'volunteerDirectorHomepage',
  templateUrl: './volunteerDirectorHomepage.component.html',
  styleUrls: ['./volunteerDirectorHomepage.component.css']
})
export class VolunteerDirectorComponent implements OnInit{
  // title: string;
  actionChoice: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    // this.title = 'All Users';
  }


  ngOnInit(): void {
    this.allRefs();
  }

  onSubmit(actionForm: NgForm){
    if(this.actionChoice === 'View Matches') {
      this.viewMatches();
    } else if(this.actionChoice === 'Manage Applications'){
      this.allNewApplications();
    } else if(this.actionChoice === 'Add Volunteers'){
      this.addRef();
    }
  }

  allRefs(){
    this.router.navigate(['volunteerUserList'], {relativeTo:this.route});
  }

  allNewApplications(){
    this.router.navigate(['volunteerNewApplicationList'], {relativeTo:this.route});
  }

  addRef(){
    this.router.navigate(['addVolunteer'], {relativeTo:this.route});
  }

viewMatches(){
    this.router.navigate(['viewMatches'], {relativeTo:this.route});
  }
}
