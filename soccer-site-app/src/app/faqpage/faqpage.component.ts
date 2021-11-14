import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-faqpage',
  templateUrl: './faqpage.component.html',
  styleUrls: ['./faqpage.component.css']
})
export class FAQPageComponent implements OnInit {
@ViewChild(MatAccordion) accordion: MatAccordion;

  CollapsedHeight: string = '50px';
  ExpandedHeight: string = '50px';


  constructor() { }

  ngOnInit(): void {
  }

}
