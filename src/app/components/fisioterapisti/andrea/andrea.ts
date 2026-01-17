import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-andrea',
  imports: [],
  templateUrl: './andrea.html',
  styleUrl: './andrea.css',
})
export class Andrea implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.seoService.setSeoData({
      title: 'Andrea | Fisioterapista | Improve Clinic Rovereto',
      description: 'Andrea - Fisioterapista professionista presso Improve Clinic Rovereto. Esperto in trattamenti avanzati e riabilitazione sportiva.',
      keywords: 'Andrea, fisioterapista, Rovereto, specialista, fisioterapia',
      url: 'https://improveclinic.it/fisioterapisti/andrea'
    });
  }

}
