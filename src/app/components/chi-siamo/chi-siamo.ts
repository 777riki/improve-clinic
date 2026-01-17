import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-chi-siamo',
  imports: [RouterLink],
  templateUrl: './chi-siamo.html',
  styleUrl: './chi-siamo.css',
})
export class ChiSiamo implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.seoService.setSeoData({
      title: 'Chi Siamo | Improve Clinic Rovereto',
      description: 'Scopri la storia di Improve Clinic Rovereto. Un team di fisioterapisti qualificati dedicati alla tua salute e al tuo benessere con competenza e attenzione.',
      keywords: 'chi siamo, team fisioterapisti, clinica Rovereto, about us, esperienza professionale',
      url: 'https://improveclinic.it/chi-siamo'
    });
  }

}
