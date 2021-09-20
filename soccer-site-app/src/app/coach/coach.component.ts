import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/models/coach';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  public coach: Coach | undefined;
  private id: String = "test3";
  constructor(private coachService:CoachService) { }

  ngOnInit(): void {
    console.log("got here");
    this.getCoach(this.id);
  }

  public getCoach(id: String): void{
    this.coachService.getCoach(id).subscribe(
      (response: Coach) => { this.coach = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    );
  }
  

}
