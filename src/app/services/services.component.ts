import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Service } from './service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.contentService.getServices().subscribe((data: Service[]) => {
      this.services = data;
    });
  }

}
