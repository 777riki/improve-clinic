import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-matteo',
  imports: [],
  templateUrl: './matteo.html',
  styleUrl: './matteo.css',
})
export class Matteo implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.seoService.setSeoData({
      title: 'Matteo | Fisioterapista | Improve Clinic Rovereto',
      description: 'Matteo - Fisioterapista professionista presso Improve Clinic Rovereto. Competente in riabilitazione e fisioterapia sportiva.',
      keywords: 'Matteo, fisioterapista, Rovereto, specialista, riabilitazione',
      url: 'https://improveclinic.it/fisioterapisti/matteo'
    });
  }

}