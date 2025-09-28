import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {
  aboutContent = {
    title: 'Quiénes somos',
    description: 'PsyWell es una startup peruana que desarrolla soluciones digitales para fortalecer la salud mental mediante seguimiento continuo y apoyo psicológico entre sesiones terapéuticas.',
    mission: 'Ser la plataforma líder en Latinoamérica en monitoreo y prevención de la salud mental, reduciendo brechas de acceso.',
    vision: 'Proporcionar herramientas tecnológicas que fortalezcan la relación paciente-psicólogo, promuevan el autocuidado y prevengan crisis mediante intervenciones personalizadas.',
    imageUrl: 'assets/images/panda.svg' // 👉 cámbialo por tu imagen real
  };
}
