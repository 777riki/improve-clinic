import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-simone',
  imports: [],
  templateUrl: './simone.html',
  styleUrl: './simone.css',
})
export class Simone implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.seoService.setSeoData({
      title: 'Simone | Fisioterapista | Improve Clinic Rovereto',
      description: 'Simone - Fisioterapista professionista presso Improve Clinic Rovereto. Esperto in trattamenti avanzati e percorsi personalizzati.',
      keywords: 'Simone, fisioterapista, Rovereto, specialista, fisioterapia',
      url: 'https://improveclinic.it/fisioterapisti/simone'
    });
  }

}