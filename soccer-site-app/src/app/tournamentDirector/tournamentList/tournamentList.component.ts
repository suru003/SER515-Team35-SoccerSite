
import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// models
import { Tournament } from '../../../models/tournament';
import { TournamentDirector } from '../../../models/tournamentDirector';
import { Category } from '../../../models/category';

// services
import { TournamentDirectorService } from '../../services/tournamentDirector.service';
import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'tournament-list',
  templateUrl: './tournamentList.component.html',
  styleUrls: ['./tournamentList.component.css']
})
export class TournamentListComponent implements OnInit {
  @ViewChild('close') close: ElementRef;


  title!:String;
  tournaments: Tournament[] = [];
  categories: Category[] = [];
  tournamentDirectorID!:string;
  director!:TournamentDirector;

  

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private tournamentDirectorService: TournamentDirectorService,
    private sharedService: SharedService) {
   this.title = 'All Tournaments';
     // this.newReferee = new Referee();
   }

   ngOnInit() {

      // get tournament director id
      this.sharedService.sharedDirectorID.subscribe(
        data => {
          this.tournamentDirectorID= data;
          // console.log("tournamen ID on addTournament is"+this.tournamentDirectorID);
        },
        error => console.log(error));

      this.tournamentDirectorService.findAllCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    });

    //   this.tournamentDirectorService.findTournamentDirectorByID(
    //     this.tournamentDirectorID).subscribe(data => {
    //       this.director = data;
    //     });

    //     this.tournamentDirectorService.findAllTournaments(
    //       this.tournamentDirectorID).subscribe(data => {
    //         this.tournaments = data;
    //   console.log(this.tournaments);
    // });



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