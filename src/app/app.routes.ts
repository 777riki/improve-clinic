import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ChiSiamo } from './components/chi-siamo/chi-siamo';
import { Servizi } from './components/servizi/servizi';
import { Galleria } from './components/galleria/galleria';
import { Prenota } from './components/prenota/prenota';
import { Contatti } from './components/contatti/contatti';
import { NotFound } from './components/not-found/not-found';
import { Orario } from './components/orario/orario';
import { Vittoria } from './components/fisiotarapisti/vittoria/vittoria';

export const routes: Routes = [
  { path: '', component: Home },                              // Home
  { path: 'chi-siamo', component: ChiSiamo },                 // Chi siamo
  { path: 'servizi', component: Servizi },                    // Servizi
  { path: 'galleria', component: Galleria },                  // Galleria
  { path: 'prenota', component: Prenota },                    // Prenota
  { path: 'contatti', component: Contatti },                  // Contatti
  { path: 'orario', component: Orario },                      // Orario
  { path: 'fisioterapisti/vittoria', component: Vittoria },   // Vittoria Zampieri
  { path: '**', component: NotFound }                         // 404
];
