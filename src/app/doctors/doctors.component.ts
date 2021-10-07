import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Doctor } from './doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})

export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.contentService.getDoctors().subscribe((data: Doctor[]) => {
      console.log("doctors", data);
      this.doctors = data;
    });
  } 
}
