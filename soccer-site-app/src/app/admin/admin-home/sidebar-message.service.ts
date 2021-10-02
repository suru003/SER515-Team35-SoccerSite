import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SidebarMessageService {
  private msgFromSideBar = new Subject <Number>();
  msgTopic$ = this.msgFromSideBar.asObservable();  
  constructor() { }
  sendMessage(message: Number){
    this.msgFromSideBar.next(message);
  }
}
