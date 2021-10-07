import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Speciality } from './speciality';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  specialities: Speciality[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getSpecialities();
  }

  getSpecialities(): void {
    this.contentService.getSpecialities().subscribe((data: Speciality[]) => {
      this.specialities = data;
    });
  }

}
