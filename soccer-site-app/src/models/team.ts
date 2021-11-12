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
}
