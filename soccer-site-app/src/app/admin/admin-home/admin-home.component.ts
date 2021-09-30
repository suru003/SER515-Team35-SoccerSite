import { Component, OnInit } from '@angular/core';
import { CoachService } from '../../services/coach.service'
import { AdminService } from '../../services/admin.service'
import { RefereeService } from '../../services/referee.service'
import { Admin } from 'src/models/admin';
import { Referee } from 'src/models/referee';
import { Coach } from 'src/models/coach';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public admins:Admin[] = []
  public referees:Referee[] = []
  public coaches:Coach[] = []
  
  constructor(private adminService: AdminService, private coachService: CoachService, private refereeService: RefereeService) { 
    adminService.getAllAdmins().subscribe(param => {
      param.forEach(admin => {
        this.admins.push(admin);
      });
    });
    coachService.getAllCoaches().subscribe(param => {
      param.forEach(coach => {
        this.coaches.push(coach);
      });
    });
    refereeService.getAllReferees().subscribe(param => {
      param.forEach(referee => {
        this.referees.push(referee);
      });
    });
  }

  ngOnInit(): void {
  }

}
