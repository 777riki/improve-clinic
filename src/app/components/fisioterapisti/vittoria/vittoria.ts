import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-vittoria',
  imports: [],
  templateUrl: './vittoria.html',
  styleUrl: './vittoria.css',
})
export class Vittoria implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.seoService.setSeoData({
      title: 'Vittoria | Fisioterapista | Improve Clinic Rovereto',
      description: 'Vittoria - Fisioterapista professionista presso Improve Clinic Rovereto. Specializzata in riabilitazione e fisioterapia personalizzata.',
      keywords: 'Vittoria, fisioterapista, Rovereto, specialista, riabilitazione',
      url: 'https://improveclinic.it/fisioterapisti/vittoria'
    });
  }

}
