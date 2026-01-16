import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound implements OnInit {

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
