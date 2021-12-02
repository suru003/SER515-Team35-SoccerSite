import { Category } from "./category";
import { Team } from "./team";
import { Field } from "./field";
import { Referee } from "./referee";




export class MatchesSchedule{
    id!: String;
    category!: Category;
    time!:String;
    field!:Field;
    homeTeam!:Team;
    homeTeamScore!:String;
    visitingTeam!:Team;
    visitingTeamScore!:String;
    type!:String;
    date!:String;
    referee!:Referee;

  public constructor(category: Category, time: String, field: Field, homeTeam: Team, homeTeamScore: String,
        visitingTeam: Team, visitingTeamScore: String, type: String, date:String) {
    this.category = category;
    this.time = time;
    this.field = field;
    this.homeTeam = homeTeam;
    this.homeTeamScore = homeTeamScore;
    this.visitingTeam = visitingTeam;
    this.visitingTeamScore = visitingTeamScore;
    this.type = type;
    this.date = date;
  }




}
