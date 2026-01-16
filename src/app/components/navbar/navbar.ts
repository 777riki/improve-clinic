import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

declare global {
  interface Window {
    bootstrap: any;
  }
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  closeNavbar() {
    const navbar = document.getElementById('navbarNavDropdown');

    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse =
        window.bootstrap.Collapse.getInstance(navbar) ||
        new window.bootstrap.Collapse(navbar, { toggle: false });

      bsCollapse.hide();
    }
  }
}