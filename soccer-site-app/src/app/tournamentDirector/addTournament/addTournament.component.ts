import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// models
import { Tournament } from '../../../models/tournament';
import { TournamentDirector } from '../../../models/tournamentDirector';
import { Category } from '../../../models/category';
import { Roles } from '../../../models/roles';

// services
import { TournamentDirectorService } from '../../services/tournamentDirector.service';
import { SharedService } from "../../services/shared.service";


// declare var $: any;

@Component({
  selector: 'addTournament',
  templateUrl: './addTournament.component.html',
  styleUrls: ['./addTournament.component.css']
})
export class AddTournamentComponent implements OnInit{

  title:String='';
  tournament: Tournament;
  categoryChosen: Category;
  categories: Category[] = [];
  roles: Roles[] = [];
  tournamentDirectorID!:string;
  tournamentDirector!:TournamentDirector;

  retrieveDirector!:TournamentDirector;
  tournament2:any;


  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private tournamentDirectorService: TournamentDirectorService,
    private sharedService: SharedService) {

    this.title = 'Add Tournament';
    this.tournament=new Tournament();
    this.categoryChosen = new Category();
    this.tournamentDirector=new TournamentDirector();
    
  }


  ngOnInit() {

    this.tournamentDirectorService.findAllCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    });

    this.sharedService.sharedManagerID.subscribe(
      data => {
        this.tournamentDirectorID= data;
        // console.log("tournamen ID on addTournament is"+this.tournamentDirectorID);
      },
      error => console.log(error));

    this.tournamentDirectorService.findTournamentDirectorByID(
      this.tournamentDirectorID).subscribe(
      data => {
        this.retrieveDirector = data;
        // console.log("retrieveDirector: "+data);
      });

    }


    onSubmit(){
     
      this.tournamentDirectorService.findCategoryByID(
        this.categoryChosen.id).subscribe(data => {
      this.categoryChosen = data;
      console.log(this.categoryChosen);
    });

      this.tournament.category = this.categoryChosen;
      console.log( this.tournament.category);

      this.tournamentDirectorService.createTournament(
        this.tournament,this.tournamentDirectorID).subscribe(
        data => {
          this.tournament2 = data;
          console.log(data);
        });
    }


    formdata=new FormGroup({  
      id:new FormControl(),  
      tournamentName:new FormControl(),
      category:new FormControl(),  
      startDate:new FormControl(),
      endDate:new FormControl(),
    // username:new FormControl(),  
    // password:new FormControl(),
    // address:new FormControl(),
    // city:new FormControl(), 
    // country:new FormControl(), 
    // roleID:new FormControl()
  });  

  // get refereeID(){  
  //   return this.updateUserID;  
  // }  
  
  // get tournamentName(){  
  //   return this.formdata.get('tournamentName');  
  // }  
  
  // get startDate(){  
  //   return this.formdata.get('startDate');  
  // }  
  
  // get endDate(){  
  //   return this.formdata.get('endDate');  
  // }  

  // get category(){  
  //   return this.formdata.get('category');  
  // }

  // get tournamentManagerID(){  
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

  // ngOnInit() {
  //   this.getRoles();
  // }


  // onSubmit(refereeForm: NgForm) {
  //   this.referee.status = 'NEW';
  //   this.adminService.createReferee(this.referee).subscribe(
  //     data => {
  //       this.createReferee = data;
  //       this.createReferee = Array.of(this.createReferee);
  //       // this.viewAllUsers();
  //     });

  //   $('#user-creation-modal').modal('show');

  // }


  // getRoles() {
  //   this.adminService.findAllRoles().subscribe(
  //     data => {
  //       this.roles = data;
  //       console.log(data);
  //     });

  // }

  // viewAllUsers() {
  //   $('#user-creation-modal').modal('close');
  //   this.router.navigate(['/allusers']);
  // }
}