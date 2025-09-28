import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans-section.component.html',
  styleUrls: ['./plans-section.component.css'],
  host: { id: 'planes' }
})
export class PlansSectionComponent {
  // Variable que controla qué tipo de plan mostrar
  selectedPlanType: 'gratuito' | 'premium' = 'gratuito';

  private router = inject(Router);

  // Método para cambiar entre planes gratuitos y premium
  selectPlanType(type: 'gratuito' | 'premium'): void {
    this.selectedPlanType = type;
  }

  // Método para manejar clics en botones de planes
  onPlanButtonClick(planType: string, userType: string): void {
    console.log(`Plan button clicked: ${planType} for ${userType}`);

    if (planType === 'premium') {
      this.selectedPlanType = 'gratuito';
    } else {
      // Para planes gratuitos, cambiar a vista premium
      this.selectedPlanType = 'premium';
    }
  }




  // Método para hacer scroll a una sección (si lo necesitas)
  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }
}
