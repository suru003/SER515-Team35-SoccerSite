import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {NgForm} from '@angular/forms';


//services
import { RefereeDirectorService } from '../../services/refereeDirector.service';


@Component({
  selector: 'refereeDirectorHomepage',
  templateUrl: './refereeDirectorHomepage.component.html',
  styleUrls: ['./refereeDirectorHomepage.component.css']
})
export class RefereeDirectorComponent implements OnInit{
  // title: string;
  actionChoice: string = '';
  newApplications!:any;
  verifiedApplications!:any;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private refereeService: RefereeDirectorService) {
    // this.title = 'All Users';
  }


  ngOnInit(): void {
    this.refereeService.findByStatus("NEW").subscribe(data => {
      this.newApplications = data;
      // console.log(data);
    });


    this.refereeService.findByStatus("VERIFIED").subscribe(data => {
      this.verifiedApplications = data;
      // console.log(data);
    });

    this.allRefs();
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
