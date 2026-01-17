import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-martina',
  imports: [],
  templateUrl: './martina.html',
  styleUrl: './martina.css',
})
export class Martina implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.seoService.setSeoData({
      title: 'Martina | Fisioterapista | Improve Clinic Rovereto',
      description: 'Martina - Fisioterapista professionista presso Improve Clinic Rovereto. Specializzata in terapie personalizzate e riabilitazione.',
      keywords: 'Martina, fisioterapista, Rovereto, specialista, clinica',
      url: 'https://improveclinic.it/fisioterapisti/martina'
    });
  }

}