import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/models/coach';
import { Team } from 'src/models/team';
import { CoachService } from '../services/coach.service';
import { TeamService } from '../services/team.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TournamentService } from '../services/tournament.service';
import { CategoryService } from '../services/category.service';
import { Tournament } from 'src/models/tournament';
import { Category } from 'src/models/category';
import { TournamentDirector } from 'src/models/tournamentDirector';


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
  
  constructor(private coachService:CoachService, private categoryService: CategoryService, private tournamentService: TournamentService, private teamService: TeamService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getAllTeams();
    this.formValue = this.formBuilder.group({
      tournamentID : ['', Validators.required],
      categoryID : ['', Validators.required],
      teamName : ['', Validators.required],
      coachID : ['', Validators.required]
    })
    
  }

  /**
   * Adding new Team
   */
  public async addTeam(): Promise<void> {
    this.selectedTeams.teamID = "";
    this.selectedTeams.teamName = this.formValue.value.teamName;
    // this.selectedTeams.tournament = new Tournament();
    // this.selectedTeams.coach = new Coach();
    // this.selectedTeams.category = new Category();
    
    
    // Foreign key coach id 
    // this.coachService.getCoach(this.formValue.value.coachID)
    //   .toPromise().then((res: Coach)=> 
    //     {
    //       var temp = res;
    //       this.selectedTeams.coach = temp;
    //     }
    //     );
    this.selectedTeams.coach = await this.coachService.getCoach(this.formValue.value.coachID);
    // Foreign key category id 
    // this.categoryService.getCategory(this.formValue.value.categoryID)
    //   .then((res: Category)=> 
    //     {
    //       this.selectedTeams.category = res;
    //     }
    //     );

    this.selectedTeams.category = await this.categoryService.getCategory(this.formValue.value.categoryID);
    
      
    // Foreign key tournament id 
    // this.tournamentService.getTournament(this.formValue.value.tournamentID)
    // .subscribe((res: Tournament)=> 
    //   {
    //     this.selectedTeams.tournament = res;
    //   }
    //   );
    this.selectedTeams.tournament = await this.tournamentService.getTournament(this.formValue.value.tournamentID);
    

    console.log("adding team "+JSON.stringify(this.selectedTeams));
    this.teamService.addTeam(this.selectedTeams)
      .subscribe(res=> 
        {
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
    this.formValue.controls['tournamentID'].setValue(this.selectedTeams.tournament.id);
    this.formValue.controls['teamName'].setValue(this.selectedTeams.teamName);
    this.formValue.controls['coachID'].setValue(this.selectedTeams.coach.id);
    this.formValue.controls['categoryID'].setValue(this.selectedTeams.category.id);
    this.selectedTeams.status = false;
  }

  public onAdd(): void{
    this.add_update = true;
    this.selectedTeams = new Team();
    this.formValue.controls['tournamentID'].reset();
    this.formValue.controls['teamName'].reset();
    this.formValue.controls['coachID'].reset();
    this.formValue.controls['categoryID'].reset();
  }

  public async updateTeam(): Promise<void>{
    this.selectedTeams.teamName = this.formValue.value.teamName;
    this.selectedTeams.coach = await this.coachService.getCoach(this.formValue.value.coachID);
    this.selectedTeams.category = await this.categoryService.getCategory(this.formValue.value.categoryID);
    this.selectedTeams.tournament = await this.tournamentService.getTournament(this.formValue.value.tournamentID);
    

    
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
    this.coachService.getCoach(id).then(
      (response: Coach) => { this.coach = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    );
  }

}
