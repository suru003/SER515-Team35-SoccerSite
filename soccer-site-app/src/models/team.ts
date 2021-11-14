import { Category } from "./category";
import { Coach } from "./coach";
import { Tournament } from "./tournament";

export class Team{
    teamID!: String;
    tournament!: Tournament;
    teamName!: String;
    coach!: Coach;
    category!: Category;
    status!: boolean;
    gender!:String;
    age!:String;
    coachName!:String;
    clubName!:String;
    city!:String;
    state!:String;
    association!:String;
    league!:String;
    playLevel!:String;
    primaryJerseyColor!:String;
    altJerseyColor!:String;
    oldestDOB!:String;
    applicationCategory!:String;
    teamContactName!:String
    emailAddress!:String;
}
