
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable,ReplaySubject } from 'rxjs';

@Injectable()
export class SharedService {

  private tournamentDirectorID = new BehaviorSubject('TMAN_00000');
  sharedManagerID = this.tournamentDirectorID.asObservable();

  constructor() { }

  setTournamentDirectorID(tournamentDirectorID: string) {
    this.tournamentDirectorID.next(tournamentDirectorID)
  }
  
}