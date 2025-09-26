import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  heroContent = {
    title: 'Tu acompañamiento emocional,todos los días',
    description: 'SoftFocus te ayuda a mantener tu bienestar mental con check-ins diarios, apoyo de IA y conexión directa con profesionales cuando más lo necesitas',
    ctaText: 'Descargar Gratis',
    appStoreUrl: 'https://apps.apple.com/app/your-app-id',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=your.package.name'
  };

  // Array para el calendario mockup
  calendarDays = Array.from({ length: 21 }, (_, i) => ({
    day: i + 1,
    moodLevel: (i % 4) + 1
  }));

  onDownloadClick(platform: 'ios' | 'android') {
    const url = platform === 'ios' ? this.heroContent.appStoreUrl : this.heroContent.playStoreUrl;
    window.open(url, '_blank');
  }

  onGetStarted() {
    // Scroll to plans section or trigger download
    const plansSection = document.getElementById('plans-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
