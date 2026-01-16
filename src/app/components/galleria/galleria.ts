import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galleria',
  imports: [],
  templateUrl: './galleria.html',
  styleUrl: './galleria.css',
})
export class Galleria implements OnInit {

  ngOnInit(): void {
    window.scroll(0,0);
  }

}