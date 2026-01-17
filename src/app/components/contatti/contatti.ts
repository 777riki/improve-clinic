import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contatti',
  imports: [],
  templateUrl: './contatti.html',
  styleUrl: './contatti.css',
})
export class Contatti implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.seoService.setSeoData({
      title: 'Contatti | Improve Clinic Rovereto',
      description: 'Contatta Improve Clinic Rovereto. Numero di telefono, email, indirizzo e modulo di contatto per qualsiasi informazione.',
      keywords: 'contatti, telefono, email, indirizzo, Rovereto, contattaci',
      url: 'https://improveclinic.it/contatti'
    });
  }

}