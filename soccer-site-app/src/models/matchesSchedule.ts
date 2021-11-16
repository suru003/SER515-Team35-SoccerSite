import { Category } from "./category";
import { Team } from "./team";

export class MatchesSchedule{
    id!: String;
    category!: Category;
    time!:String;
    field!:String;
    homeTeam!:Team;
    homeTeamScore!:String;
    visitingTeam!:Team;
    visitingTeamScore!:String;
    type!:String;


}
