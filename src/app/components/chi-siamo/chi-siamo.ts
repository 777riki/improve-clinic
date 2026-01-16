import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chi-siamo',
  imports: [RouterLink],
  templateUrl: './chi-siamo.html',
  styleUrl: './chi-siamo.css',
})
export class ChiSiamo implements OnInit {

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
