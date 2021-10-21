import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/models/coach';
import { CoachService } from '../services/coach.service';
import { TeamService } from '../services/team.service';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  public coach: Coach | undefined;
  private id: String = "test3";
  formValue !: FormGroup;
  public teams!: any;
  constructor(private coachService:CoachService, private teamService: TeamService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(data => {
      this.teams = data;
      console.log("Got teams "+this.teams);
    });
    this.formValue = this.formBuilder.group({
      tournamentID : [''],
      categoryId : [''],
      teamName : [''],
      coachID : ['']
    })
    
  }

  public getCoach(id: String): void{
    this.coachService.getCoach(id).subscribe(
      (response: Coach) => { this.coach = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    );
  }

}
