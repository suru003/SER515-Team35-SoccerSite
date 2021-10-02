import { Component, OnInit } from '@angular/core';
import { CoachService } from '../../services/coach.service'
import { AdminService } from '../../services/admin.service'
import { RefereeService } from '../../services/referee.service'
import { Admin } from 'src/models/admin';
import { Referee } from 'src/models/referee';
import { Coach } from 'src/models/coach';
import { SidebarMessageService } from './sidebar-message.service';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  
  public admins:Admin[] = []
  public referees:Referee[] = []
  public coaches:Coach[] = []
  public list_of:String = "<br><br><br><br><br><br><br><br><br>"
  public admin_profile: String = "./assets/users/admin.png"
  public coach_profile: String = "./assets/users/coach.png"
  public player_profile: String = "./assets/users/player.png"
  public referee_profile: String = "./assets/users/referee.png"
  public displayList:boolean[] = [true, false, false, false];
  constructor(private adminService: AdminService, private coachService: CoachService, private refereeService: RefereeService, private messenger: SidebarMessageService) { 
    
    this.messenger.msgTopic$.subscribe(
      message => {
        console.log("message "+message);

        if(message == 1){
          this.admins = [];
          adminService.getAllAdmins().subscribe(param => {
            param.forEach(admin => {
              this.admins.push(admin);
            });
          });    
          
          this.list_of = "ADMINS"
          this.displayList = [true, false, false, false];  
        }
        else if(message == 2){
          this.coaches = [];
          coachService.getAllCoaches().subscribe(param => {
            param.forEach(coach => {
              this.coaches.push(coach);
            });
          });

          this.list_of = "COACHES"
          this.displayList = [false, true, false, false];  
        }
        else if(message == 3){
          this.referees = [];
          refereeService.getAllReferees().subscribe(param => {
            param.forEach(referee => {
              this.referees.push(referee);
            });
          });

          this.list_of = "REFEREES"
          this.displayList = [false, false, true, false];  
        }
        else{
          this.admins = [];
          adminService.getAllAdmins().subscribe(param => {
            param.forEach(admin => {
              this.admins.push(admin);
            });
          });      
          this.displayList = [true, false, true, true];  
        }
      }
    );
  
  }

  ngOnInit(): void {
  }
  removeReferee(index: Number){
    console.log("remove Referee: "+index);
  }
  removeCoach(index: Number){
    console.log("remove Coach: "+index);
  }
  removeAdmin(index: Number){
    console.log("remove Admin: "+index);
  }
}
