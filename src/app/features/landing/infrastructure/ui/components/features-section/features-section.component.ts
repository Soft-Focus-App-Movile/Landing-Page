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
      screenshots: 'assets/images/seguimiento diario 1.svg',
      description: 'Registra cómo te sientes cada día  '
    },
    {
      id: 'emotional-ai',
      title: 'IA emocional',
      icon: 'assets/images/2fi.svg',
      category: 'user',
      screenshots: 'assets/images/IA 1.svg',
      description: 'Apoyo cuando más lo necesitas '
    },
    {
      id: 'immediate-resources',
      title: 'Recursos inmediatos',
      icon: 'assets/images/3fi.svg',
      category: 'user',
      screenshots: 'assets/images/Biblioteca 1.svg',
      description: 'Accede a meditaciones, lecturas y herramientas  '
    },
    {
      id: 'professional-dashboard',
      title: 'Dashboard Profesional',
      icon: 'assets/images/4fi.svg',
      category: 'psychologist',
      screenshots: 'assets/images/paciente 1.svg',
      description: 'Monitorea el progreso emocional de tus pacientes '
    },
    {
      id: 'direct-chat',
      title: 'Conexión Profesional',
      icon: 'assets/images/5fi.svg',
      category: 'psychologist',
      screenshots: 'assets/images/Link.svg',
      description: 'Conecta con tus pacientes mediante un enlace y acompáñalos en su progreso '
    },
    {
      id: 'crisis-button',
      title: 'Alertas',
      icon: 'assets/images/6fi.svg',
      category: 'psychologist',
      screenshots: 'assets/images/alertas 1.svg',
      description: 'Detecta cuándo un paciente necesita ayuda urgente y acompáñalo al instante'
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
