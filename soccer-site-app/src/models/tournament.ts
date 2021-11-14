
import { TournamentDirector } from './tournamentDirector';
import { Category } from './category';

export class Tournament{
	id!:String;
	tournamentName!:String;
	// category!:String;
	category!: Category;
	startDate!:Date;
	endDate!:Date;
  	// manager_id!:String ;
  	tournamentManager!:TournamentDirector ;
}
	