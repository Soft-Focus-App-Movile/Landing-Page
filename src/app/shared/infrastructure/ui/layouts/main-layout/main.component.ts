import { Component } from '@angular/core';
import { HeaderComponent} from '../../components/header/header.component';
import {HeroSectionComponent} from '../../../../../features/landing/infrastructure/ui/components/hero-section/hero-section.component';
import {
  PlansSectionComponent
} from '../../../../../features/landing/infrastructure/ui/components/plans-section/plans-section.component';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, HeroSectionComponent, PlansSectionComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainLayoutComponent {

}
