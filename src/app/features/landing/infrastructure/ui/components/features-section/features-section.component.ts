import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  id: string;
  title: string;
  icon: string;
  category: 'user' | 'psychologist';
  screenshots: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent {

  // Cambio: Array para permitir múltiples tarjetas abiertas
  expandedFeatures: string[] = [];

  features: Feature[] = [
    {
      id: 'daily-tracking',
      title: 'Seguimiento diario',
      icon: 'assets/images/1fi.svg',
      category: 'user',
      screenshots: 'assets/images/1fs.svg',
      description: 'Registra tus emociones y pensamientos diariamente'
    },
    {
      id: 'emotional-ai',
      title: 'IA emocional',
      icon: 'assets/images/2fi.svg',
      category: 'user',
      screenshots: 'assets/images/2fs.svg',
      description: 'Asistente inteligente para apoyo emocional'
    },
    {
      id: 'immediate-resources',
      title: 'Recursos inmediatos',
      icon: 'assets/images/3fi.svg',
      category: 'user',
      screenshots: 'assets/images/3fs.svg',
      description: 'Acceso rápido a herramientas de bienestar'
    },
    {
      id: 'professional-dashboard',
      title: 'Dashboard Profesional',
      icon: 'assets/images/4fi.svg',
      category: 'psychologist',
      screenshots: 'assets/images/4fs.svg',
      description: 'Panel completo para gestionar pacientes'
    },
    {
      id: 'direct-chat',
      title: 'Chat Directo',
      icon: 'assets/images/5fi.svg',
      category: 'psychologist',
      screenshots: 'assets/images/5fs.svg',
      description: 'Comunicación segura con pacientes'
    },
    {
      id: 'crisis-button',
      title: 'Botón de Crisis',
      icon: 'assets/images/6fi.svg',
      category: 'psychologist',
      screenshots: 'assets/images/6fs.svg',
      description: 'Sistema de alerta para situaciones críticas'
    }
  ];

  getUserFeatures(): Feature[] {
    return this.features.filter(feature => feature.category === 'user');
  }

  getPsychologistFeatures(): Feature[] {
    return this.features.filter(feature => feature.category === 'psychologist');
  }

  // Método actualizado para permitir múltiples tarjetas abiertas
  toggleFeature(featureId: string): void {
    const index = this.expandedFeatures.indexOf(featureId);

    if (index === -1) {
      // Si no está en el array, la agregamos (abrir)
      this.expandedFeatures.push(featureId);
    } else {
      // Si ya está en el array, la quitamos (cerrar)
      this.expandedFeatures.splice(index, 1);
    }
  }

  // Método actualizado para verificar si una tarjeta está expandida
  isExpanded(featureId: string): boolean {
    return this.expandedFeatures.includes(featureId);
  }
}
