
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable,ReplaySubject } from 'rxjs';

// models
import { Admin2 } from '../../models/admin2';

@Injectable()
export class SharedService {

  private tournamentDirectorID = new BehaviorSubject('TMN_00100');
  private directorID = new BehaviorSubject('TMN_00100');
  private directorRetrieved = new BehaviorSubject(new Admin2());

  sharedManagerID = this.tournamentDirectorID.asObservable();
  sharedDirectorID = this.directorID.asObservable();
  sharedDirector = this.directorRetrieved.asObservable();

  constructor() { }

  setTournamentDirectorID(tournamentDirectorID: string) {
    this.tournamentDirectorID.next(tournamentDirectorID)
  }

  setDirectorID(directorID: string) {
    this.directorID.next(directorID)
  }

  setDirectorFound(directorRetrieved: Admin2) {
    this.directorRetrieved.next(directorRetrieved)
  }
  
}