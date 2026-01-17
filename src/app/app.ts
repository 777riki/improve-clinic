import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('improve-clinic');

  constructor(private titleService: Title, private metaService: Meta) {
    // Default SEO for app root
    this.titleService.setTitle('Improve Clinic Rovereto | Fisioterapia Professionale');
  }
}
