import { Component, OnInit } from '@angular/core';
import { SidebarMessageService } from '../sidebar-message.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public account_name: String = "testing 124"
  public account_email: String = "testing@gmail.com"
  public account_profile: String = "./assets/users/admin.png"
  constructor(private messenger: SidebarMessageService) { }

  ngOnInit(): void {
  }
  sendUpdate(msg: Number): void{
    this.messenger.sendMessage(msg);
  }
}
