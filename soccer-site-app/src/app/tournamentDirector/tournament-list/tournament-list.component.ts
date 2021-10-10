import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Tournament } from '../../../models/tournament';

import { TournamentDirectorService } from '../../services/tournamentDirector.service';

@Component({
  selector: 'tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  @ViewChild('close') close: ElementRef;

  // user: Users[] = [];
  // admins: Admin2[] = [];
  // referee: Referee[] = [];
  // title: string;
  // deleteRef: any;
  // deleteUserID!:String;
  // updateUserID!:String;
  // roles: Roles[] = [];

  // refs: Referee[];  
  // newReferee: Referee = new Referee();
  // newRefereelist:any; 

  title!:String;
  tournaments!: any;
  

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private tournamentDirectorService: TournamentDirectorService) {
   this.title = 'All Tournaments';
     // this.newReferee = new Referee();
   }

   ngOnInit() {

    this.tournamentDirectorService.findAllTournaments().subscribe(data => {
      this.tournaments = data;
      this.tournaments = Array.of(this.tournaments);  
      console.log(data);
    });



  }

  // deleteReferee() {  
  //   this.adminService.deleteReferee(this.deleteUserID) 
  //   .subscribe(  
  //     data => {  
  //       console.log(data);  
  //       this.viewAllUsers();

  //     },  
  //     error => console.log(error)); 
  //   this.closeModal();
  //   this.refreshPage();
  // }


  // confirmDeletion(id: String) {  
  //   this.deleteUserID = id;
  //   this.adminService.findRefereeByID(id) 
  //   .subscribe(  
  //     data => {  
  //       this.deleteRef = data;
  //       this.deleteRef = Array.of(this.deleteRef);  
  //     },  
  //     error => console.log(error));  

  // }



  // updateReferee(id: String){
  //   this.updateUserID = id;
  //   console.log("id is:" + id);
  //   this.getRoles();
    
  //   this.adminService.findRefereeByID(id)  
  //   .subscribe(  
  //     data => {  
  //       this.newRefereelist = data;
  //       this.newRefereelist = Array.of(this.newRefereelist); 
  //       console.log(data);             
  //     },  
  //     error => console.log(error));  


  // }

  // formdata=new FormGroup({  
  //   id:new FormControl(),  
  //   firstName:new FormControl(),
  //   lastName:new FormControl(),  
  //   email:new FormControl(),
  //   contactNo:new FormControl(),
  //   username:new FormControl(),  
  //   password:new FormControl(),
  //   address:new FormControl(),
  //   city:new FormControl(), 
  //   country:new FormControl(), 
  //   roleID:new FormControl()
  // });  

  // get refereeID(){  
  //   return this.updateUserID;  
  // }  
  
  // get refereeFirstN(){  
  //   return this.formdata.get('firstName');  
  // }  
  
  // get refereeLastN(){  
  //   return this.formdata.get('lastName');  
  // }  
  
  // get refereeEmail(){  
  //   return this.formdata.get('email');  
  // }  

  // get refereeContactNo(){  
  //   return this.formdata.get('contactNo');  
  // }

  // get refereeUsername(){  
  //   return this.formdata.get('username');  
  // }

  // get refereePassword(){  
  //   return this.formdata.get('password');  
  // }

  // get refereeAddress(){  
  //   return this.formdata.get('address');  
  // }

  // get refereeCity(){  
  //   return this.formdata.get('city');  
  // }

  // get refereeCountry(){  
  //   return this.formdata.get('country');  
  // }

  // get refereeRoleID(){  
  //   return this.formdata.get('roleID');  
  // }


  // onSubmit(){
  //  this.newReferee=new Referee();   
  //  this.newReferee.id=this.refereeID;  
  //  this.newReferee.firstName=this.refereeFirstN!.value;  
  //  this.newReferee.lastName=this.refereeLastN!.value;  
  //  this.newReferee.email=this.refereeEmail!.value; 
  //  this.newReferee.contactNo=this.refereeContactNo!.value; 
  //  this.newReferee.username=this.refereeUsername!.value;   
  //  this.newReferee.password=this.refereePassword!.value; 
  //  this.newReferee.address=this.refereeAddress!.value; 
  //  this.newReferee.city=this.refereeCity!.value; 
  //  this.newReferee.country=this.refereeCountry!.value; 
  //  this.newReferee.roleID=this.refereeRoleID!.value; 
  //   // console.log(this.StudentBranch.value);  


  //   this.adminService.updateReferee(this.newReferee).subscribe(  
  //     data => {       
  //       console.log(data);

  //     },  
  //     error => console.log(error));  
  //   this.closeModal();
  //   this.refreshPage();
  // }



  // viewAllUsers() {
  //   this.router.navigate(['/allusers']);
  // }

  // closeModal(){
  //   this.close.nativeElement.click();
  // }

  // closeDeleteModal(){
  //   this.closeDeleteModal.nativeElement.click();
  // }

  // refreshPage(){
  //   window.location.reload();
  // }

  // getRoles() {
  //   this.adminService.findAllRoles().subscribe(
  //     data => {
  //       this.roles = data;
  //       console.log(data);
  //     });

  // }



}