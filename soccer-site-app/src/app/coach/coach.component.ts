import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/models/coach';
import { Team } from 'src/models/team';
import { CoachService } from '../services/coach.service';
import { TeamService } from '../services/team.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  public PAGE_HEADER:String = "Team-Director DashBoard";
  // true: add false: update
  public add_update: boolean = true;
  public coach: Coach | undefined;
  private id: String = "test3";
  formValue !: FormGroup;
  public teams!: any;
  public selectedTeams!: Team;
  
  constructor(private coachService:CoachService, private teamService: TeamService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getAllTeams();
    this.formValue = this.formBuilder.group({
      tournamentID : ['', Validators.required],
      categoryId : ['', Validators.required],
      teamName : ['', Validators.required],
      coachID : ['', Validators.required]
    })
    
  }

  /**
   * Adding new Team
   */
  public addTeam(): void {
    this.selectedTeams = new Team();
    this.selectedTeams.teamID = "";
    this.selectedTeams.tournamentID = this.formValue.value.tournamentID;
    this.selectedTeams.teamName = this.formValue.value.teamName;
    this.selectedTeams.coachID = this.formValue.value.coachID;
    this.selectedTeams.categoryID = this.formValue.value.categoryID;
    this.teamService.addTeam(this.selectedTeams)
      .subscribe(res=> 
        {
          console.log("Adding team: "+res.teamName);
          alert("Team added successfully");
          this.formValue.reset();
          let formCancel = document.getElementById("cancel");
          if(formCancel != null)
            formCancel.click();  
          // refresh the list
          this.getAllTeams();
        },
        err=> {
          alert("Failed to add the team: "+err);
        }
        ); 
  }


   /**
   * Deleting a Team
   */  
   public deleteTeam(id: String): void{
    this.teamService.deleteTeam(id)
      .subscribe(res=> {
        console.log("Team deleted at index: "+id);
        // refresh the list
        this.getAllTeams();
      }
      );
  }

  

  public onEdit(index: number): void{
    this.add_update = false;
    this.selectedTeams = this.teams[index];
    this.formValue.controls['tournamentID'].setValue(this.selectedTeams.tournamentID);
    this.formValue.controls['teamName'].setValue(this.selectedTeams.teamName);
    this.formValue.controls['coachID'].setValue(this.selectedTeams.coachID);
    this.formValue.controls['categoryDd'].setValue(this.selectedTeams.categoryID);
    this.selectedTeams.status = false;
  }

  public onAdd(): void{
    this.add_update = true;
    this.selectedTeams = new Team();
    this.formValue.controls['tournamentID'].reset();
    this.formValue.controls['teamName'].reset();
    this.formValue.controls['coachID'].reset();
    this.formValue.controls['categoryDd'].reset();
  }

  public updateTeam(): void{
    this.selectedTeams.tournamentID = this.formValue.value.tournamentID;
    this.selectedTeams.teamName = this.formValue.value.teamName;
    this.selectedTeams.coachID = this.formValue.value.coachID;
    this.selectedTeams.categoryID = this.formValue.value.categoryID;
    
    this.teamService.updateTeam(this.selectedTeams)
      .subscribe(res=> 
        {
          console.log("Updating team: "+res.teamName);
          alert("Team updated successfully");
          this.formValue.reset();
          let formCancel = document.getElementById("cancel");
          if(formCancel != null)
            formCancel.click();  
          // refresh the list
          this.getAllTeams();
        },
        err=> {
          alert("Failed to update the team: "+err);
        }
        ); 
  }

  
  public getAllTeams():void{
    this.teamService.getAllTeams().subscribe(data => {
      this.teams = data;
      console.log(this.teams);
    });
    this.add_update = true;
  }


  public getCoach(id: String): void{
    this.coachService.getCoach(id).subscribe(
      (response: Coach) => { this.coach = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    );
  }


}
