import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  activeSection = 'inicio';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  setActiveSection(section: string) {
    this.activeSection = section;
    this.closeMenu();
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
