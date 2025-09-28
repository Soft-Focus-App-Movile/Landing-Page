import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css']
})
export class FaqSectionComponent {
  faqs = [
    {
      question: '¿Qué es PsyWell – Soft Focus?',
      answer: 'Una app de bienestar emocional que combina inteligencia artificial y recursos clínicos para acompañar a los usuarios en su día a día y facilitar el monitoreo de los psicólogos.',
      open: true
    },
    {
      question: '¿Mis datos están seguros?',
      answer: 'Sí, aplicamos encriptación de nivel bancario. Todos tus registros y conversaciones son privados y solo accesibles por ti y tu psicólogo.',
      open: false
    },
    {
      question: '¿Qué beneficios tiene para los psicólogos?',
      answer: 'Les permite monitorear en tiempo real a sus pacientes, recibir alertas de crisis, generar reportes clínicos y acceder a un dashboard profesional.',
      open: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
