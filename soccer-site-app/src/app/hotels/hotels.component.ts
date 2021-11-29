import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { HotelsService } from '../services/hotels.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

 title: string;
 formValue !: FormGroup;
 hotel: Hotel;

 public availHotels!: any;
 
 constructor(
   private hotelsService: HotelsService, private formBuilder: FormBuilder) {
   this.hotel = new Hotel();
   this.title = 'Register/Update your hotel';
   this.getAllHotels();   

 }

getAllHotels(){
  this.hotelsService.getAllHotels().subscribe(
    data => {
      this.availHotels = data;
      console.log(this.availHotels );
      
    });
}

 ngOnInit() {
    this.formValue = this.formBuilder.group({
      hotelName : ['', Validators.required],
      link : ['', Validators.required],
      available : ['', Validators.required]
  });
  }

  updateHotel() {
   this.hotel = new Hotel();
   this.hotel.hotelName = this.formValue.value.hotelName;
   this.hotel.link = this.formValue.value.link;
   this.hotel.available = String(this.formValue.value.available).toUpperCase().charAt(0) == "Y";
     
   console.log(this.hotel);
   if(this.hotel.hotelName.trim().length>0 && this.hotel.link.trim().length>0)
        this.hotelsService.updateHotel(this.hotel).subscribe(
          data => {
            this.hotel = data;
            console.log(this.hotel);
            alert("Updated successfully the hotel details");
            this.formValue.reset();
          },
          err => {
            alert("Failed: "+err);
          }
          );
   else
     alert("Hotel name or link is empty");  
  this.getAllHotels();
  }
 }

//  viewAllUsers() {
//    $('#user-creation-modal').modal('close');
//    this.router.navigate(['/allusers']);
//  }
