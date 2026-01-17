import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-galleria',
  imports: [],
  templateUrl: './galleria.html',
  styleUrl: './galleria.css',
})
export class Galleria implements OnInit {

  constructor(private seoService: SeoService) {}
  
    ngOnInit(): void {
      window.scroll(0, 0);
      
      this.seoService.setSeoData({
        title: 'Galleria | Improve Clinic Rovereto',
        description: 'Galleria delle immagini della Improve Clinic a Rovereto.',
        keywords: 'galleria, immagini, Improve Clinic, Rovereto',
        url: 'https://improveclinic.it/galleria'
      });
    }
}