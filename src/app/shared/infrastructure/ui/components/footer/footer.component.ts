import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  url: string;
  label: string;
}

interface SocialLink {
  url: string;
  icon: string;
}

interface FooterLinks {
  explore: FooterLink[];
  recursos: FooterLink[];
  compania: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerLinks: FooterLinks = {
    explore: [
      { url: '#', label: 'App para Usuarios' },
      { url: '#', label: 'App para Psicólogos' },
      { url: '#', label: 'Funcionalidades' },
      { url: '#', label: 'Planes y Precios' }
    ],
    recursos: [
      { url: '#', label: 'Blog sobre salud mental' },
      { url: '#', label: 'Guías prácticas de autocuidado' },
      { url: '#', label: 'Biblioteca de recursos terapeúticos' },
      { url: '#', label: 'Centro de ayuda' }
    ],
    compania: [
      { url: '#', label: 'Sobre Nosotros' },
      { url: '#', label: 'Contacto' },
      { url: '#', label: 'Términos y Condiciones'},
      { url: '#', label: 'Política de Privacidad' }
    ]
  };

  socialLinks: SocialLink[] = [
    { url: 'https://instagram.com', icon: 'assets/images/instagram.svg' },
    { url: 'https://facebook.com', icon: 'assets/images/facebook.svg' },
    { url: 'https://github.com', icon: 'assets/images/github.svg' }
  ];
}
